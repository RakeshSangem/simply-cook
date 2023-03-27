import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
import { addIngredientToUser } from "../lib/firebase";
import Modal from "./Modal";
import toast from "react-simple-toasts";
import { toastConfig } from "react-simple-toasts";

toastConfig({
  time: 1000,
  position: "bottom-center",
});

export default function IngredientList({ ingredient }) {
  const text = ingredient.text;
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);

  const handleAddIngredient = async () => {
    if (user) {
      await addIngredientToUser(user, text);
      toast("Ingredient added to your list!");
    } else {
      setShowModal(true);
    }
  };

  return (
    <li className="flex items-start justify-between gap-x-2">
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <div className="flex">
        <svg
          className="mr-4 h-6 w-6 shrink-0"
          width="30"
          height="30"
          viewBox="0 0 18 14"
          fill="none"
        >
          <path
            d="M17.5 1.41L5.5 13.41L0 7.91L1.41 6.5L5.5 10.58L16.09 0L17.5 1.41Z"
            fill="#0FA958"
          />
        </svg>
        <p className="text-lg font-normal">{text}</p>
      </div>
      <button className="px-4 py-1" onClick={handleAddIngredient}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="opacity-40 transition-opacity relative -z-10 duration-200 ease-in-out hover:opacity-100"
        >
          <path
            fill="currentColor"
            d="M4 7a1 1 0 0 0 0 2h2.22l2.624 10.5c.223.89 1.02 1.5 1.937 1.5h12.47c.903 0 1.67-.6 1.907-1.47L27.75 10h-2.094l-2.406 9H10.78L8.157 8.5A1.984 1.984 0 0 0 6.22 7H4zm18 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3zm-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3zm3-14v3h-3v2h3v3h2v-3h3v-2h-3V7h-2zm-3 16c.564 0 1 .436 1 1c0 .564-.436 1-1 1c-.564 0-1-.436-1-1c0-.564.436-1 1-1zm9 0c.564 0 1 .436 1 1c0 .564-.436 1-1 1c-.564 0-1-.436-1-1c0-.564.436-1 1-1z"
          />
        </svg>
      </button>
    </li>
  );
}
