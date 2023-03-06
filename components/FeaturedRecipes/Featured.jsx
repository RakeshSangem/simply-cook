import CategoryItem from "@/components/Categories/CategoryItem";

export default function Featured({ data }) {
  return (
    <section className="w-full md:max-w-4xl mx-auto">
      <h2 className="pb-4 text-lg">Our Vegetarian picks</h2>
      <section className="w-full flex gap-x-6 mx-auto overflow-x-scroll overflow-hidden pb-8">
        {data.slice(0, 3).map((recipe) => {
          return <CategoryItem categoryData={recipe} />;
        })}
      </section>
      <h2 className="pb-4 text-lg">Trending</h2>
      <section className="w-full flex gap-x-6 mx-auto overflow-x-scroll overflow-hidden"></section>
    </section>
  );
}
