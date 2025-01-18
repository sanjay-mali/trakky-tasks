import { useState, useEffect } from "react";
import "./App.css";

function App() {
  interface Service {
    id: number;
    salon_name: string;
    service_name: string;
    description: string;
    price: number;
    service_image: string;
  }

  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://20.193.149.47:2242/salons/service/?page=${page}`
      );
      const data = await response.json();
      setServices(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const filteredServices = services.filter(
    (service) =>
      service.salon_name.toLowerCase().includes(search.toLowerCase()) ||
      service.service_name.toLowerCase().includes(search.toLowerCase())
  );
  console.log("filteredServices", filteredServices);
  return (
    <>
      <input
        type="text"
        placeholder="Search by salon or service name..."
        value={search}
        onChange={handleSearch}
        className="search-input"
      />
      <table className="service-table">
        <thead>
          <tr>
            <th>Salon Name</th>
            <th>Service Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          ) : filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <tr key={service.id} className="service-row">
                <td data-label="Salon Name">{service.salon_name}</td>
                <td data-label="Service Name">{service.service_name}</td>
                <td
                  data-label="Description"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                ></td>
                <td data-label="Price">₹{service.price}</td>
                <td data-label="Image">
                  <img
                    src={service.service_image}
                    alt={service.salon_name}
                    className="service-image"
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No Data Available</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination-buttons">
        <button onClick={() => setPage(page - 1)} disabled={!prevPage}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)} disabled={!nextPage}>
          Next
        </button>
      </div>
    </>
  );
}

export default App;
