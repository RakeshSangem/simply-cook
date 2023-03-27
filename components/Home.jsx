import Link from "next/link";
import { Nunito } from "@next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

export default function Home() {

  return (
    <>
      <main
        className={`${nunito.className} relative mx-auto grid place-items-center bg-cover bg-center px-4`}
      >
        <div className=" py-12 text-center">
          <h1 className="leading-tighter mb-4 max-w-3xl text-5xl font-bold tracking-tighter md:text-6xl">
            Search over 2.3M+ <span>Recipes</span> from our app
          </h1>
          <p className="mx-auto w-3/4 text-2xl font-semibold text-black/40">
            Discover recipes from our huge database and become better chef
          </p>
          <div className="py-10">
            <Link
              href="/recipe"
              className="rounded-md bg-blue-400 px-8 py-3 text-xl font-medium text-white"
            >
              Explore Recipes
            </Link>
          </div>
        </div>
        <section className="">
          <div>Find your favorite recipe at your finger tips</div>
        </section>
      </main>
    </>
  );
}
