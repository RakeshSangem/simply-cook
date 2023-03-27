import CartItem from "../Cart/CartItem";
import { useContext, useState, useRef, useEffect } from "react";
import { CartContext } from "../../contexts/cartContext";
import useOnClickOutside from "@/hooks/useOnClickOutside";

export default function CartDropDown() {
  const { items, itemsCount, setIsCartOpen } = useContext(CartContext);

  return (
    <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-black bg-opacity-50">
      <div className="absolute top-16 right-2 z-40 flex h-96 w-96 flex-col bg-white shadow-xl sm:right-6">
        <div className="border-b border-gray-200 py-2 px-4 sm:px-6">
          <div className="flex items-start justify-between">
            <h2
              className="text-lg font-medium text-gray-900"
              id="slide-over-title"
            >
              Ingredients
            </h2>
            <button className="" onClick={() => setIsCartOpen(false)}>
              X
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-scroll px-2">
          {itemsCount > 0 ? (
            items.map((item, idx) => <CartItem key={idx} item={item} />)
          ) : (
            <div className="flex h-full flex-col place-items-center items-center justify-center px-8 text-center">
              <h3 className="text-2xl font-bold text-slate-800">
                Empty Cart:(
              </h3>
              <p className="text-slate-500">
                browse your favorite recipes and add ingredients
              </p>
            </div>
            // eslint-disable-next-line @next/next/no-img-element
          )}
        </div>

        <div className="border-t border-gray-200 py-3 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Total Ingredients</p>
            <span className="rounded-lg bg-gray-100 px-4 py-1 font-semibold">
              {itemsCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
