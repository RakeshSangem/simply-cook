import { useEffect, useState } from "react";
import Head from "next/head";
import SearchBar from "@/components/SearchBar";
import Loader from "@/components/Loader";
import RecipeCard from "@/components/RecipeCard";
import Featured from "@/components/FeaturedRecipes/Featured";

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [hits, setHits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    (async () => {
      const request = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}&health=vegetarian&random=true`
      );
      const { hits } = await request.json();
      setHits((hitsOld) => {
        if (hitsOld.length === 0) return hits;
        return hitsOld;
      });
    })();
  }, [hits]);

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
    <main className="dark mx-auto h-full px-4">
      <Head>
        <title>Search Recipe</title>
      </Head>
      <SearchBar onSubmit={getRecipe} />
      <section className="flex w-full flex-wrap justify-center gap-6 p-4">
        {isLoading ? (
          <Loader />
        ) : (
          recipes.map((recipe, idx) => (
            <RecipeCard key={idx} recipeData={recipe} />
          ))
        )}
      </section>
      {isFetched ? "" : <Featured data={hits} />}
    </main>
  );
}