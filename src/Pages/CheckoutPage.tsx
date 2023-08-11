import React, { useEffect } from "react";
import { useCart } from "../contexts/useContextCart";
import { cartItem } from "../types/types";

export default function CheckoutPage() {
  const { cart } = useCart();
  const total: number = cart.reduce(
    (acc: number, item: cartItem) => (acc += item.price),
    0
  );
  useEffect(() => {}, []);
  return (
    <div
      className="flex md:flex-row flex-col justify-center items-stretch p-16"
      id="cart"
    >
      <div
        className="w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
        id="scroll"
      >
        <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Bag</p>
        {cart.map((item: cartItem) => (
          <div className="md:flex gap-8 items-center mt-14 py-8 border-t border-gray-200">
            <div className="w-1/4">
              <img
                src={item.image}
                alt="product"
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="md:pl-3 md:w-3/4">
              <div className="flex items-center justify-between w-full pt-1">
                <p className="text-base font-black leading-none text-gray-800">
                 {item.title}
                </p>
                <span className="p-2 border border-gray-200 bg-gray-200 mr-6 focus:outline-none">{item.quantity}</span>
              </div>
              <p className="text-xs leading-3 text-gray-600 py-4">
                Color: {item.color}
              </p>
              <p className="text-xs leading-3 text-gray-600 pt-2">
                Size: {item.size}
              </p>
              <div className="flex items-center justify-between pt-5 pr-6">
                <p className="text-base font-black leading-none text-gray-800">
                  ${item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center md:w-1/2 w-full ">
        <div className="flex flex-col px-14 py-20 w-full bg-gray-50">
          <div className="flex flex-col gap-4">
            <p className="text-2xl leading-9 text-gray-800">Order Summary</p>
            <div className="flex items-center justify-between pt-16">
              <p className="text-base leading-none text-gray-500">Subtotal</p>
              <p className="text-base leading-none text-gray-800">{total}</p>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <p className="text-base leading-none text-gray-500">Shipping</p>
              <p className="text-base leading-none text-gray-800">$30</p>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <p className="text-base leading-none text-gray-500">Tax</p>
              <p className="text-base leading-none text-gray-800">$0</p>
            </div>
            <hr />
          </div>
          <div>
            <div className="flex items-center pb-6 justify-between pt-10">
              <p className="leading-normal text-gray-500">Total</p>
              <p className="leading-normal text-right text-gray-800">
                ${total + 30}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
