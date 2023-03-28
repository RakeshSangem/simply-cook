import { signInWithGooglePopup } from "@/lib/firebase";
import { useRef, useEffect } from "react";

export default function Modal({ isOpen, onClose }) {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClose]);

  const handleLogin = () => {
    signInWithGooglePopup();
    onClose();
  };

  return (
    <div className="z-999 fixed inset-0 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center">
        <div className="fixed inset-0 bg-black opacity-60"></div>
        <div ref={ref} className="z-20 rounded-lg bg-white p-8">
          <h2 className="mb-4 text-lg font-medium">Please log in</h2>
          <p className="mb-4">You must be logged in to add ingredients.</p>
          <div className="flex flex-col">
            <button
              type="button"
              onClick={handleLogin}
              className="mr-2 mb-2 inline-flex items-center justify-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50"
            >
              <svg
                className="mr-4 -ml-1 h-4 w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Sign in with Google
            </button>
            <button className="w-full py-2 text-gray-500" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
