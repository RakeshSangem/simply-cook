import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

export default function CartItem({ item }) {
  const { removeIngredient } = useContext(CartContext);

  return (
    <div className="my-3 flex items-start justify-between gap-x-1 rounded-md hover:bg-red-50/80 px-4 py-2">
      <div className="flex gap-x-2 text-slate-800 text-left">
        <span>{item}</span>
      </div>
      <button className="text-red-400" onClick={() => removeIngredient(item)}>
        remove
      </button>
    </div>
  );
}
