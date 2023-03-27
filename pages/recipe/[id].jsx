import IngredientList from "../../components/IngredientList";
import Head from "next/head";
import Duration from "@/components/Duration";
import Servings from "@/components/Servings";
import Footer from "@/components/Footer";

export default function index({ data }) {
  const recipe = data.recipe;

  return (
    <main className="mx-auto max-w-2xl">
      <Head>
        <title>{recipe.label}</title>
      </Head>
      <div
        style={{
          backgroundImage: `url(${recipe.image})`,
        }}
        className="bg-red inner-shadow h-[300px] w-full bg-cover bg-center bg-no-repeat"
      ></div>
      <div className="z-5 w-full text-center">
        <h1 className="bg-gradient-to-b from-[#222F5C] to-[#8D61AF] bg-clip-text py-2 text-5xl font-bold italic text-transparent ">
          {recipe.label}
        </h1>
      </div>
      <section className="mx-auto flex w-full justify-center gap-6 py-4">
        {recipe.totalTime > 0 && <Duration time={recipe.totalTime} />}
        {recipe.yield > 0 && <Servings servs={recipe.yield} />}
      </section>
      <section className="mt-8">
        <h2 className="bg-gradient-to-b from-[#1B69B0] to-[#0F2B46] bg-clip-text text-center text-2xl font-semibold text-transparent">
          RECIPE INGREDIENTS
        </h2>
        <ul className="grid grid-cols-1 justify-center gap-6 p-10 md:grid-cols-2">
          {recipe.ingredients.map((ingredient, idx) => (
            <IngredientList key={idx} ingredient={ingredient} />
          ))}
        </ul>
        <div>
          <h2 className="my-8 bg-gradient-to-b from-[#1B69B0] to-[#0F2B46] bg-clip-text px-10 text-center text-2xl font-semibold text-transparent">
            HOW TO COOK IT
          </h2>
          <p className="px-10 text-center text-gray-800">
            This recipe was carefully designed and tested by <span>Food</span>
            Please check out directions at their website
          </p>
          <div className="flex justify-center">
            <a
              href=""
              className="group m-5  inline-flex h-12 w-44 items-center justify-center gap-1 rounded-full bg-gradient-to-r from-[#1B69B0] to-[#0F2B46] text-white duration-300 hover:scale-105 active:translate-y-1 active:scale-100"
            >
              DIRECTIONS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="duration-300 group-hover:translate-x-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.3 17.275q-.3-.3-.288-.725t.313-.725L16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.3-.713t.3-.712q.3-.3.713-.3t.712.3L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.687.275t-.713-.3Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export async function getServerSideProps(context) {
  const recipe = await fetch(
    `https://api.edamam.com/api/recipes/v2/${context.params.id}?type=public&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}`
  );
  const data = await recipe.json();
  return {
    props: {
      data,
    },
  };
}
