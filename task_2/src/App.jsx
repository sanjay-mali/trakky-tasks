import { useState } from "react";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  const [formData, setFormData] = useState({
    spa_name: "",
    city: "",
    area: "",
    price: "",
    timing: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, images: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.spa_name || !formData.city || !formData.area || !formData.price || !formData.timing || formData.images.length === 0) {
      alert("Please fill in all fields and upload at least one image.");
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append("spa_name", formData.spa_name);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("area", formData.area);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("timing", formData.timing);
    formData.images.forEach((image, index) => {
      formDataToSend.append(`images[${index}]`, image);
    });

    try {
      const response = await fetch(
        "http://20.193.149.47:2242/spas/vendor-spa-update-test/1/",
        {
          method: "PUT",
          body: formDataToSend,
        }
      );
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <label>
              Spa Name:
              <input
                type="text"
                name="spa_name"
                value={formData.spa_name}
                onChange={handleChange}
              />
            </label>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </label>
            <label>
              Area:
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </label>
            <label>
              Timing:
              <input
                type="time"
                name="timing"
                value={formData.timing}
                onChange={handleChange}
              />
            </label>
            <label>
              Images:
              <input
                type="file"
                name="images"
                multiple
                onChange={handleChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="preview-section">
          <h2>Live Preview</h2>
          <p>
            <strong>Spa Name:</strong> {formData.spa_name}
          </p>
          <p>
            <strong>City:</strong> {formData.city}
          </p>
          <p>
            <strong>Area:</strong> {formData.area}
          </p>
          <p>
            <strong>Price:</strong> ₹{formData.price}
          </p>
          <p>
            <strong>Timing:</strong> {formData.timing}
          </p>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {formData.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index + 1}`}
                  className="preview-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default App;
