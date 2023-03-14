import Link from "next/link";

export default function TrendingItem({ trendingRecipe }) {
  const { image, label } = trendingRecipe.recipe;

  const string = trendingRecipe._links.self.href;
  const url = new URL(string);
  const urlPath = url.pathname.split("/");
  const id = urlPath[urlPath.length - 1];

  return (
    <Link href={`/recipe/${id}`}>
      <article class="h-64 w-48 shrink-0 snap-center overflow-hidden rounded-3xl duration-300">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="h-full w-full object-cover" src={image} alt={label} />
      </article>
    </Link>
  );
}
