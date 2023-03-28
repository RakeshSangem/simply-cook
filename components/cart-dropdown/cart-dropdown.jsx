import { useContext, useRef, useEffect } from "react";
import { CartContext } from "../../contexts/cartContext";
import CartItem from "../Cart/CartItem";

export default function CartDropDown({ buttonRef }) {
  const { items, itemsCount, setIsCartOpen } = useContext(CartContext);
  const dropDownRef = useRef();
  console.log();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsCartOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={dropDownRef}
      className="absolute top-12 right-16 z-40 flex h-96 w-96 flex-col rounded-2xl border border-gray-200 bg-white shadow-xl sm:right-6 sm:max-w-md"
    >
      <div className="border-b border-gray-200 py-2 px-4 sm:px-6">
        <div className="flex items-start justify-between">
          <h2
            className="py-2 text-lg font-medium text-gray-900"
            id="slide-over-title"
          >
            Ingredients
          </h2>
        </div>
      </div>
      <div className="flex-1 overflow-y-scroll px-2">
        {itemsCount > 0 ? (
          items.map((item, idx) => <CartItem key={idx} item={item} />)
        ) : (
          <div className="flex h-full flex-col place-items-center items-center justify-center px-8 text-center">
            <h3 className="text-2xl font-bold text-slate-800">Empty Cart:(</h3>
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
  );
}
