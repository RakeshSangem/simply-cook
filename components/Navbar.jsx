import { UserContext } from "@/contexts/userContext";
import { signInWithGooglePopup } from "@/lib/firebase";
import Link from "next/link";
import { useContext, useRef, useState, useEffect } from "react";
import { signOutUser } from "@/lib/firebase";

import { CartContext } from "@/contexts/cartContext";
import CartDropDown from "./cart-dropdown/cart-dropdown";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { user } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen, itemsCount } = useContext(CartContext);
  const buttonRef = useRef(null);

  const newUser = user ? user.displayName.split(" ")[0] : "";

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isNavbarFixed = scrollPosition > 100;

  const loginWithGoogle = () => {
    signInWithGooglePopup();
  };

  return (
    <nav
      className={` sticky z-50 mx-auto flex h-16 w-full items-center  border-b border-gray-200 px-2 transition-transform duration-300 ease-in-out ${
        isNavbarFixed
          ? "animate-slide-down sticky top-0 bg-white/60 backdrop-blur-sm"
          : ""
      }`}
    >
      <div className="container relative mx-auto flex max-w-6xl items-center justify-between">
        {isCartOpen && <CartDropDown buttonRef={buttonRef} />}
        <Link href={"/"}>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img className="w-20 md:w-36" src="/logo.png" alt="" />
        </Link>
        {user && (
          <p className="text-gray-500 hidden sm:flex">
            Welcome,{" "}
            <span className="text-lg font-semibold text-slate-600">
              {newUser}
            </span>
          </p>
        )}
        <ul className="flex items-center gap-x-8">
          {user ? (
            <button onClick={signOutUser}>Sign Out</button>
          ) : (
            <button onClick={loginWithGoogle}>Sign In</button>
          )}
          <button
            ref={buttonRef}
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative grid place-items-center align-middle font-sans text-black hover:text-gray-700"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 42 42"
              fill="none"
              className="realative"
            >
              <path
                d="M21.9157 15.1154V7.96154C21.9157 6.38044 21.2925 4.8641 20.1832 3.74609C19.0739 2.62809 17.5694 2 16.0007 2C14.4319 2 12.9274 2.62809 11.8182 3.74609C10.7089 4.8641 10.0857 6.38044 10.0857 7.96154V15.1154M27.9979 11.947L29.99 31.0239C30.1004 32.0811 29.2802 33 28.225 33H3.7764C3.52751 33.0003 3.28134 32.9478 3.0539 32.8459C2.82645 32.744 2.62281 32.5951 2.45621 32.4087C2.2896 32.2224 2.16376 32.0028 2.08685 31.7642C2.00994 31.5256 1.98368 31.2734 2.00979 31.0239L4.00353 11.947C4.04952 11.5076 4.25531 11.1008 4.58123 10.8052C4.90715 10.5096 5.33011 10.3461 5.76856 10.3462H26.2328C27.1414 10.3462 27.9032 11.0377 27.9979 11.947ZM10.6772 15.1154C10.6772 15.2735 10.6149 15.4251 10.504 15.5369C10.393 15.6487 10.2426 15.7115 10.0857 15.7115C9.92884 15.7115 9.77839 15.6487 9.66746 15.5369C9.55653 15.4251 9.49421 15.2735 9.49421 15.1154C9.49421 14.9573 9.55653 14.8056 9.66746 14.6938C9.77839 14.582 9.92884 14.5192 10.0857 14.5192C10.2426 14.5192 10.393 14.582 10.504 14.6938C10.6149 14.8056 10.6772 14.9573 10.6772 15.1154ZM22.5072 15.1154C22.5072 15.2735 22.4449 15.4251 22.3339 15.5369C22.223 15.6487 22.0726 15.7115 21.9157 15.7115C21.7588 15.7115 21.6084 15.6487 21.4974 15.5369C21.3865 15.4251 21.3242 15.2735 21.3242 15.1154C21.3242 14.9573 21.3865 14.8056 21.4974 14.6938C21.6084 14.582 21.7588 14.5192 21.9157 14.5192C22.0726 14.5192 22.223 14.582 22.3339 14.6938C22.4449 14.8056 22.5072 14.9573 22.5072 15.1154Z"
                stroke="#222222"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {itemsCount !== 0 && (
              <span className="absolute top-3 right-0 m-0 grid h-5 w-5 place-items-center rounded-full border border-[#FFD7D7] bg-[#FFB1B1] text-sm  leading-tight text-black">
                {itemsCount}
              </span>
            )}
          </button>
        </ul>
      </div>
    </nav>
  );
}
