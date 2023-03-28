import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="relative mx-auto grid place-items-center bg-cover bg-center px-4">
        <div className="mt-10 py-12 text-center md:mt-28">
          <h1 className="leading-tighter mb-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-800 md:text-7xl">
            Search over 2.3M+ <span className="">Recipes</span> from our app
          </h1>
          <p className="mx-auto text-xl font-medium text-slate-500 sm:w-3/4 sm:text-2xl">
            Discover recipes from our huge database and become better chef
          </p>
          <div className="py-10">
            <Link
              href="/recipe"
              className="rounded-md bg-blue-500 px-12 py-3 text-lg font-medium text-white hover:bg-blue-600"
            >
              Explore Recipes
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
