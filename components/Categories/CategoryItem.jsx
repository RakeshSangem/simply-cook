import Link from "next/link";

export default function CategoryItem({ categoryData, onImageLoaded }) {
  const { label, image } = categoryData.recipe;

  console.log("I'm dumb");

  const string = categoryData._links.self.href;
  const url = new URL(string);
  const urlPath = url.pathname.split("/");
  const id = urlPath[urlPath.length - 1];

  // console.log(id);
  return (
    <Link href={`/recipe/${id}`}>
      <article className="group relative w-72 max-w-sm overflow-hidden rounded-lg border border-slate-300 bg-white shadow hover:shadow-xl">
        <div className="h-60">
          <img
            onLoad={() => onImageLoaded(false)}
            className="h-full w-full rounded-sm object-cover"
            src={image}
            alt={label}
          />
        </div>
        <div className="fade-up absolute bottom-0 flex h-1/2 w-full items-end justify-center pb-5 text-center">
          <h2 className="text-lg text-white">{label}</h2>
        </div>
      </article>
    </Link>
  );
}
