import Link from "next/link";

export default function CategoryItem({ categoryData }) {
  const { label, image } = categoryData.recipe;

  const string = categoryData._links.self.href;
  const url = new URL(string);
  const urlPath = url.pathname.split("/");
  const id = urlPath[urlPath.length - 1];
  // console.log(id);
  return (
    <Link href={`/recipe/${id}`}>
      <article className="group relative w-72 border-slate-300 max-w-sm bg-white rounded-lg shadow border overflow-hidden hover:shadow-xl">
        <div className="h-60">
          <img
            className="rounded-sm object-cover w-full h-full"
            src={image}
            alt={label}
          />
        </div>
        <div className="absolute bottom-0 w-full h-1/2 pb-5 flex justify-center items-end fade-up text-center">
          <h2 className="text-white text-lg">{label}</h2>
        </div>
      </article>
    </Link>
  );
}
