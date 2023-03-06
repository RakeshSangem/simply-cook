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
      <article className="group relative w-80 rounded-md border-slate-300 border-2 overflow-hidden hover:shadow-xl hover:scale-105 duration-500">
        <div className="h-60">
          <img
            className="rounded-sm object-cover w-full h-full"
            src={image}
            alt={label}
          />
        </div>
        <div className="px-3 py-3">
          <span className="px-2 bg-teal-100 font-medium rounded-md py-1 mb-2 text-cyan-700">
            {cuisineType}
          </span>
          <h4 className="text-2xl font-bold text-black/80 group-hover:text-blue-700 truncate pt-2">
            {label}{" "}
          </h4>
          <h6 className="text-lg py-1 font-semibold text-gray-500">{source}</h6>
        </div>
      </article>
    </Link>
  );
}
