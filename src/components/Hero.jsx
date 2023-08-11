import React from "react";
import { VideoCameraIcon } from "@heroicons/react/20/solid";

export default function Hero() {
  return (
    <div className="container mx-auto flex justify-between items-stretch p-16">
      <div className="bg-[#fafbfd] flex flex-col justify-center gap-5 p-10 w-1/2">
        <h1 className="text-3xl font-bold">Premium Comfort Unisex T-Shirt</h1>
        <p className="text-gray-600">
          This t-shirt effortlessly blends fashion and functionality, making it
          an essential addition to your wardrobe. Whether you're lounging at
          home or stepping out for a casual gathering, our Unisex T-Shirt
          ensures you look and feel your best.
        </p>
        <div className="flex gap-4 w-full items-center">
        <button className="bg-indigo-600 text-white p-3 px-5 w-fit">Shop Now &rarr;</button>
        <button className="bg-indigo-600 text-white w-fit flex p-3 px-5 gap-2">Watch Video <VideoCameraIcon className="h-6 w-6"/></button>
        </div>
      </div>
      <img
        className="h-96 flex-grow-2 bg-blue-800"
        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
      />
    </div>
  );
}
