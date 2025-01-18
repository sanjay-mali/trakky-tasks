import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

function Card() {
  const restaurants = [
    {
      id: 1,
      name: "Wow! China",
      tagline: "Best In Veg Noodles",
      rating: 4.2,
      deliveryTime: "35-40 Mins",
      description: "Tibetan, Chinese, Asian, Snacks",
      free_delivery: "Free Delivery",
      img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
    },
    {
      id: 2,
      name: "The Belgian Waffle Co.",
      tagline: "Best In Desserts",
      rating: 4.6,
      deliveryTime: "20-25 Mins",
      description: "Waffle, Desserts, Ice Cream",
      free_delivery: "Free Delivery",
      img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
    },
    {
      id: 3,
      name: "Kaffa Coffee Roasters",
      tagline: "Best In Coffee",
      rating: 4.1,
      deliveryTime: "20-25 Mins",
      description: "Cafe, Continental, Desserts",
      free_delivery: "Free Delivery",
      img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
    },
    {
      id: 4,
      name: "Kaffa Coffee Roasters",
      tagline: "Best In Coffee",
      rating: 4.1,
      deliveryTime: "20-25 Mins",
      description: "Cafe, Continental, Desserts",
      free_delivery: "Free Delivery",
      img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
    },
    {
      id: 5,
      name: "Kaffa Coffee Roasters",
      tagline: "Best In Coffee",
      rating: 4.1,
      deliveryTime: "20-25 Mins",
      description: "Cafe, Continental, Desserts",
      free_delivery: "Free Delivery",
      img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
    },
    {
      id: 6,
      name: "Kaffa Coffee Roasters",
      tagline: "Best In Coffee",
      rating: 4.1,
      deliveryTime: "20-25 Mins",
      description: "Cafe, Continental, Desserts",
      free_delivery: "Free Delivery",
      img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
    },
    {
      id: 7,
      name: "Kaffa Coffee Roasters",
      tagline: "Best In Coffee",
      rating: 4.1,
      deliveryTime: "20-25 Mins",
      description: "Cafe, Continental, Desserts",
      free_delivery: "Free Delivery",
      img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
    },
  ];

  return (
    <div className="px-4 py-6">
      <h1 className="text-xl font-bold mb-4">
        Top 2294 Restaurants to Explore
      </h1>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 ">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="flex overflow-hidden transition-shadow duration-200  "
          >
            <div className="relative w-40 sm:w-48 sm:h-36">
              <img
                src={restaurant.img}
                alt={restaurant.name}
                className="w-full h-52 rounded-xl object-cover"
              />
              <div className="absolute top-3 right-3">
                <button className="bg-white/70 p-1.5 rounded-full hover:bg-white">
                  <AiOutlineHeart className="text-red-500 w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col justify-between ">
              <div>
                <h2 className="text-lg font-bold truncate">
                  {restaurant.name}
                </h2>
                <p className="text-sm text-gray-500">{restaurant.tagline}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="bg-green-600 text-white w-6 h-6 flex items-center justify-center rounded-full">
                    <FaStar />
                  </div>
                  <span className="text-sm font-medium">
                    {restaurant.rating}
                  </span>
                  <span className="text-gray-400 text-sm">•</span>
                  <span className="text-sm font-medium">
                    {restaurant.deliveryTime}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-2 truncate">
                {restaurant.description}
              </div>
              <div className="mt-2 text-sm font-bold text-red flex justify-between p-4 rounded-full bg-gradient-to-r from-white to-red-100">
                <p>Free Delivery</p>
                <p>One Lite</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
