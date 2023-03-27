import { UserContext } from "@/contexts/userContext";
import { signInWithGooglePopup } from "@/lib/firebase";
import Link from "next/link";
import { useContext } from "react";
import { signOutUser } from "@/lib/firebase";

import { CartContext } from "@/contexts/cartContext";
import CartDropDown from "./cart-dropdown/cart-dropdown";

export default function Navbar() {
  const { user } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen, itemsCount } = useContext(CartContext);
  const newUser = user ? user.displayName.split(" ")[0] : "Guest";

  const loginWithGoogle = () => {
    signInWithGooglePopup();
  };

  return (
    <nav className="mx-auto flex h-20 w-full items-center border-b border-gray-200 px-2">
      <div className="container relative mx-auto flex max-w-6xl items-center justify-between">
        {isCartOpen && <CartDropDown />}
        <Link href={"/"}>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img className="w-36 md:w-48" src="/logo.png" alt="" />
        </Link>
        {user && (
          <p className="text-gray-500">
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
            onClick={() => setIsCartOpen((prev) => !prev)}
            className="grid place-items-center align-middle font-sans text-black hover:text-gray-700"
          >
            <a href="#" role="button" className="relative flex items-center">
              {/* <svg className="h-8 w-8 flex-1 fill-current" viewbox="0 0 24 24">
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg> */}
              <svg width="30" height="30" viewBox="0 0 256 256">
                <path
                  fill="currentColor"
                  d="M100 216a20 20 0 1 1-20-20a20 20 0 0 1 20 20Zm84-20a20 20 0 1 0 20 20a20 20 0 0 0-20-20Zm51.47-120.47l-27.29 88.7A27.87 27.87 0 0 1 181.41 184H82.93A28.13 28.13 0 0 1 56 163.69L21.81 44H12a12 12 0 0 1 0-24h12.82a20.08 20.08 0 0 1 19.23 14.51L51.34 60H224a12 12 0 0 1 11.47 15.53ZM207.75 84H58.19l20.89 73.1a4 4 0 0 0 3.85 2.9h98.48a4 4 0 0 0 3.83-2.82Z"
                />
              </svg>
              {itemsCount !== 0 && (
                <span className="top right absolute right-0 top-0 m-0 h-4 w-4 rounded-full bg-red-600 p-0 text-center font-mono text-sm  leading-tight text-white">
                  {itemsCount}
                </span>
              )}
            </a>
          </button>
        </ul>
      </div>
    </nav>
  );
}
