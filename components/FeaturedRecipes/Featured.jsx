import CategoryItem from "@/components/Categories/CategoryItem";
import { useState } from "react";
import Skeleton from "../Skeleton/Skeleton";
import TrendingSkeleton from "../Skeleton/TrendingSkeleton";
import TrendingItem from "./TrendingItem";

export default function Featured({ data }) {
  const [isImageLoading, setImageLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="mx-auto w-full pb-10 md:max-w-6xl">
      <h2 className="pb-4 text-lg font-semibold">Top picks</h2>
      <div className="no-scrollbar mx-auto w-full snap-x overflow-hidden overflow-x-scroll pb-8">
        <div
          className={`${
            isImageLoading ? "hidden" : "flex"
          } justify-between gap-x-2`}
        >
          {data.slice(0, 4).map((recipe, idx) => {
            return (
              <CategoryItem
                key={idx}
                categoryData={recipe}
                onImageLoaded={setImageLoading}
              />
            );
          })}
        </div>
        <div className={`${isImageLoading ? "flex" : "hidden"} gap-x-2`}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <Skeleton key={idx} />
          ))}
        </div>
      </div>
      <h2 className="pb-4 text-lg font-semibold">Trending</h2>
      <section className="no-scrollbar mx-auto flex w-full snap-x gap-x-3 overflow-hidden overflow-x-scroll">
        {data.length > 0
          ? data
              .slice(4)
              .map((recipe, idx) => (
                <TrendingItem key={idx} trendingRecipe={recipe} />
              ))
          : Array.from({ length: 10 }).map((_, idx) => (
              <TrendingSkeleton key={idx} />
            ))}
      </section>
    </section>
  );
}
