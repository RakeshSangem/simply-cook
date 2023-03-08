import CategoryItem from "@/components/Categories/CategoryItem";
import { useState } from "react";
import Skeleton from "../Skeleton/Skeleton";

export default function Featured({ data }) {
  const [isImageLoading, setImageLoading] = useState(true);
  // console.log(data);

  return (
    <section className="mx-auto w-full md:max-w-4xl">
      <h2 className="pb-4 text-lg">Our Vegetarian picks</h2>
      <section className="mx-auto w-full overflow-hidden overflow-x-scroll pb-8">
        <div className={`${isImageLoading ? "hidden" : "flex"} gap-x-2 `}>
          {data.slice(0, 3).map((recipe, idx) => {
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
          {Array.from({ length: 3 }).map((_, idx) => (
            <Skeleton key={idx} />
          ))}
        </div>
      </section>
      <h2 className="pb-4 text-lg">Trending</h2>
      <section className="mx-auto flex w-full gap-x-6 overflow-hidden overflow-x-scroll"></section>
    </section>
  );
}
