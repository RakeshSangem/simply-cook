export default function IngredientList({ ingredient }) {
  return (
    <>
      <li className="flex gap-x-2 gap-y-">
        <svg
          className="mr-4 w-6 h-6"
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
        <p className="text-lg font-normal">{ingredient.text}</p>
      </li>
    </>
  );
}
