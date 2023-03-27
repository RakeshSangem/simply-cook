import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { signInWithGooglePopup } from "@/lib/firebase";

export default function Modal({ isOpen, onClose }) {
  const { user } = useContext(UserContext);

  const handleLogin = () => {
    signInWithGooglePopup();
    onClose();
  };

  return (
    <>
      {/* {isOpen && ( */}
      <div className="z-999 fixed inset-0 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-60"></div>
          <div className="z-20 rounded-lg bg-white p-8">
            <h2 className="mb-4 text-lg font-medium">Please log in</h2>
            <p className="mb-4">You must be logged in to add ingredients.</p>
            <div className="flex flex-col">
              <button
                className="w-full rounded-md bg-green-500 px-4 py-2 text-white"
                onClick={handleLogin}
              >
                Log in
              </button>
              <button className="w-full py-2 text-gray-500" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
