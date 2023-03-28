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
          className="mr-4 shrink-0"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4.125 13.125L9.375 18.375L19.875 7.125"
            stroke="#0FA958"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="text-md font-normal text-slate-600">{text}</p>
      </div>
      <button className="px-4 py-1" onClick={handleAddIngredient}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 31 30"
          fill="none"
          className="hover:opacity-80"
        >
          <mask id="path-1-inside-1_106_50" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5 30C23.7843 30 30.5 23.2843 30.5 15C30.5 6.71573 23.7843 0 15.5 0C7.21573 0 0.5 6.71573 0.5 15C0.5 23.2843 7.21573 30 15.5 30ZM16.7407 16.2406H22.9437C23.2728 16.2406 23.5883 16.1099 23.821 15.8772C24.0536 15.6446 24.1843 15.329 24.1843 15C24.1843 14.671 24.0536 14.3554 23.821 14.1228C23.5883 13.8901 23.2728 13.7594 22.9437 13.7594H16.7407V7.5564C16.7407 7.22737 16.61 6.91182 16.3774 6.67916C16.1447 6.4465 15.8292 6.3158 15.5001 6.3158C15.1711 6.3158 14.8555 6.4465 14.6229 6.67916C14.3902 6.91182 14.2595 7.22737 14.2595 7.5564V13.7594H8.05652C7.72749 13.7594 7.41194 13.8901 7.17928 14.1228C6.94662 14.3554 6.81592 14.671 6.81592 15C6.81592 15.329 6.94662 15.6446 7.17928 15.8772C7.41194 16.1099 7.72749 16.2406 8.05652 16.2406H14.2595V22.4436C14.2595 22.7726 14.3902 23.0882 14.6229 23.3209C14.8555 23.5535 15.1711 23.6842 15.5001 23.6842C15.8292 23.6842 16.1447 23.5535 16.3774 23.3209C16.61 23.0882 16.7407 22.7726 16.7407 22.4436V16.2406Z"
            />
          </mask>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.5 30C23.7843 30 30.5 23.2843 30.5 15C30.5 6.71573 23.7843 0 15.5 0C7.21573 0 0.5 6.71573 0.5 15C0.5 23.2843 7.21573 30 15.5 30ZM16.7407 16.2406H22.9437C23.2728 16.2406 23.5883 16.1099 23.821 15.8772C24.0536 15.6446 24.1843 15.329 24.1843 15C24.1843 14.671 24.0536 14.3554 23.821 14.1228C23.5883 13.8901 23.2728 13.7594 22.9437 13.7594H16.7407V7.5564C16.7407 7.22737 16.61 6.91182 16.3774 6.67916C16.1447 6.4465 15.8292 6.3158 15.5001 6.3158C15.1711 6.3158 14.8555 6.4465 14.6229 6.67916C14.3902 6.91182 14.2595 7.22737 14.2595 7.5564V13.7594H8.05652C7.72749 13.7594 7.41194 13.8901 7.17928 14.1228C6.94662 14.3554 6.81592 14.671 6.81592 15C6.81592 15.329 6.94662 15.6446 7.17928 15.8772C7.41194 16.1099 7.72749 16.2406 8.05652 16.2406H14.2595V22.4436C14.2595 22.7726 14.3902 23.0882 14.6229 23.3209C14.8555 23.5535 15.1711 23.6842 15.5001 23.6842C15.8292 23.6842 16.1447 23.5535 16.3774 23.3209C16.61 23.0882 16.7407 22.7726 16.7407 22.4436V16.2406Z"
            fill="#F3A1A1"
          />
        </svg>
      </button>
    </li>
  );
}
