import React from "react";

function Clouser() {
  return (
    <div className="mt-4">
      <Swiper spaceBetween={10} slidesPerView={1}>
        <SwiperSlide>
          <div className="bg-red-500 text-white flex items-center justify-center h-32 rounded-lg shadow">
            Flat 50% OFF
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-yellow-500 text-white flex items-center justify-center h-32 rounded-lg shadow">
            Special Deal
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Clouser;
