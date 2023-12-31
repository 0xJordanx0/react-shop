import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ShoppingBagIcon,
  ArchiveBoxXMarkIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../contexts/useContextCart";
import { cartItem } from "../types/types";
import { NavLink } from "react-router-dom";
export default function Cart() {
  const { cart } = useCart();
  return (
    <Popover className="relative">
      <Popover.Button className="group -m-2 flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {cart.length}
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-1xl">
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative bg-white p-7 pt-0">
              {cart.length > 0 ? (
                cart.map((item: cartItem) => (
                  <div
                    key={item.title}
                    className="flex justify-between items-center mx-auto p-7 pl-0 border-b-2"
                  >
                    <div className="flex gap-5 items-center">
                      <img src={item.image} className="h-16" />
                      <div className="flex flex-col">
                        <span>{item.title}</span>
                        <span className="text-sm text-gray-500">Color: {item.color}</span>
                        <span className="text-sm text-gray-500">Size: {item.size}</span>
                      </div>
                    </div>
                    <ArchiveBoxXMarkIcon className="h-6 w-6 text-gray-500" />
                  </div>
                ))
              ) : (
                <p className="text-center p-7">Cart is empty!</p>
              )}
              <NavLink to="/checkout" className="block bg-indigo-600 text-white p-2 text-center rounded-md">
                Checkout
              </NavLink>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
