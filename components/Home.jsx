import Link from "next/link";
export default function Home() {
  return (
    <main className="px-4 grid place-items-center bg-cover bg-center">
      <div className="py-12 mx-auto text-center max-w-screen-lg">
        <h1 className="max-w-3xl font-bold mb-4 leading-tighter tracking-tighter md:text-6xl text-5xl">
          Search over 2.3M+ <span>Recipes</span> from our app
        </h1>
        <p className="w-3/4 mx-auto text-2xl text-black/40 font-semibold">
          Discover recipes from our huge database and become better chef
        </p>
        <div className="py-10">
          <Link
            href="/recipe"
            className="bg-blue-400 px-8 py-3 rounded-md text-xl text-white font-medium"
          >
            Explore Recipes
          </Link>
        </div>
      </div>
    </main>
  );
}
