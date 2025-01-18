import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SearchBar } from "./components/SearchBar";
import Header from "./components/Header";
import CuisineCard from "./components/CuisineCard";
import Card from "./components/Card";

const RestaurantCard = ({ name, cuisine, offer, deliveryTime, rating }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-sm font-semibold mb-1">{name}</h3>
      <p className="text-xs text-gray-500 mb-1">{cuisine}</p>
      {offer && (
        <p className="text-sm font-semibold text-green-600 mb-1">{offer}</p>
      )}
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>{deliveryTime} mins</span>
        <span>⭐ {rating}</span>
      </div>
    </div>
  );
};

const FoodAppUI = () => {
  return (
    <div className=" min-h-screen">
      <Header />
      <SearchBar />
      <div className=" p-4">
        <Swiper spaceBetween={10} slidesPerView={1}>
          <SwiperSlide>
            <div className="bg-red-500 text-white flex items-center justify-center h-32 md:h-48 rounded-lg shadow">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png"
                alt="Offer 1"
                className="h-full w-full object-cover rounded-lg"
              />
              <p className="absolute bottom-3 font-bold left-2 ">
                Restaurants Near Me For Dining out
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-yellow-500 text-white flex items-center justify-center h-32 md:h-48 rounded-lg shadow">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png"
                alt="Offer 1"
                className="h-full w-full object-cover rounded-lg"
              />
              <p className="absolute bottom-3 font-bold left-2 ">
                Restaurants Near Me For Dining out
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-yellow-500 text-white flex items-center justify-center h-32 md:h-48 rounded-lg shadow">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png"
                alt="Offer 1"
                className="h-full w-full object-cover rounded-lg"
              />
              <p className="absolute bottom-3 font-bold left-2 ">
                Restaurants Near Me For Dining out
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <CuisineCard />

      <div className="p-4 flex gap-2 overflow-x-auto">
        <div className="border border-black rounded-full w-20 text-center p-2 flex-shrink-0">
          <p>Filter</p>
        </div>
        <div className="border border-black rounded-full w-24 text-center p-2 flex-shrink-0">
          <p>Sort By</p>
        </div>
        <div className="border border-black rounded-full w-36 text-center p-2 flex-shrink-0">
          <p>10 Min Delivery </p>
        </div>
        <div className="border border-black rounded-full w-24 text-center p-2 flex-shrink-0">
          <p>Cuisines</p>
        </div>
        <div className="border border-black rounded-full w-36 text-center p-2 flex-shrink-0">
          <p>40% Discount</p>
        </div>
      </div>

     <Card />
    </div>
  );
};

export default FoodAppUI;
