import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

export default function CartItem({ item }) {
  const { removeIngredient } = useContext(CartContext);

  return (
    <div className="my-3 flex items-start justify-between gap-x-1 rounded-sm bg-blue-50 px-4 py-2">
      <div className="flex gap-x-2 text-slate-800">
        <span>{item}</span>
      </div>
      <button className="text-red-500" onClick={() => removeIngredient(item)}>
        remove
      </button>
    </div>
  );
}
