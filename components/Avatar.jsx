import { useState, useContext } from "react";
import { signOutUser } from "../lib/firebase";
import { UserContext } from "@/contexts/userContext";
import { async } from "@firebase/util";

export default function Avatar() {
  const { user } = useContext(UserContext);
  const { displayName, email, photoURL } = user;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="avatarButton"
        type="button"
        className="h-10 w-10 cursor-pointer rounded-full border-2 border-gray-200"
        src={photoURL}
        alt="User dropdown"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      />

      {isDropdownOpen && (
        <div className="absolute top-12 right-0 z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow">
          <div className="px-4 py-3 text-sm text-gray-900">
            <div>{displayName}</div>
            <div className="truncate font-medium">{email}</div>
          </div>
          <div className="py-1">
            <button
              href="#"
              className="w-full px-4 py-2 text-start text-sm text-gray-700 hover:bg-gray-100"
              onClick={signOutUser}
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </>
  );
}
