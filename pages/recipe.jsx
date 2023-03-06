import { useState } from "react";
import Head from "next/head";
import SearchBar from "@/components/SearchBar";
import Loader from "@/components/Loader";
import RecipeCard from "@/components/RecipeCard";
import Featured from "@/components/FeaturedRecipes/Featured";

export default function Recipe({ hits }) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  const getRecipe = async (e, value) => {
    e.preventDefault();
    setIsLoading(true);
    setIsFetched(true);
    try {
      const result = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${value}&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}`
      );
      const { hits } = await result.json();

      setRecipes(hits);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="h-full mx-auto px-4 dark">
      <Head>
        <title>Search Recipe</title>
      </Head>
      <SearchBar onSubmit={getRecipe} />
      <section className="w-full flex gap-6 p-4 flex-wrap justify-center">
        {isLoading ? (
          <Loader />
        ) : (
          recipes.map((recipe) => <RecipeCard recipeData={recipe} />)
        )}
      </section>
      {isFetched ? "" : <Featured data={hits} />}
    </main>
  );
}

export async function getServerSideProps() {
  const request = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}&health=vegetarian&random=true`
  );
  const { hits } = await request.json();

  return {
    props: { hits },
  };
}
