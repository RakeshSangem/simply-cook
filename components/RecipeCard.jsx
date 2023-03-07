import Link from "next/link";

export default function RecipeCard({ recipeData }) {
  const { label, image, cuisineType, source } = recipeData.recipe;

  const string = recipeData._links.self.href;

  const url = new URL(string);
  const urlPath = url.pathname.split("/");
  const id = urlPath[urlPath.length - 1];
  console.log(id);
  return (
    <Link href={`/recipe/${id}`}>
      <article className="group relative w-80 overflow-hidden rounded-md border border-slate-200 duration-500 hover:scale-105 hover:shadow-xl">
        <div className="h-60">
          <img
            className="h-full w-full rounded-sm object-cover"
            src={image}
            alt={label}
          />
        </div>
        <div className="px-3 py-3">
          <span className="mb-2 rounded-md bg-teal-100 px-2 py-1 font-light text-cyan-700">
            {cuisineType}
          </span>
          <h4 className="truncate pt-2 text-2xl font-bold text-black/80 group-hover:text-blue-700">
            {label}{" "}
          </h4>
          <h6 className="py-1 text-lg font-semibold text-gray-500">{source}</h6>
        </div>
      </article>
    </Link>
  );
}
