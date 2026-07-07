import { getRecipes } from "@sanity/lib/query";
import type { RecipeType } from "@app/types";
import { urlForImage } from "@sanity/lib/image";
import { Card } from "@components/ui/card/Card";

export default async function Recipes() {
  const recipes: RecipeType[] = await getRecipes();
  return (
    <div className="mx-auto px-6 py-16 sm:px-8 sm:py-24 lg:px-12 max-w-7xl">
      <h2 className="sr-only">Recipes</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((document) => (
          <Card
            key={document._id}
            href={`recipes/${document.slug.current}`}
            image={
              document.mainImage
                ? urlForImage(document.mainImage).width(300).url()
                : null
            }
            title={document.title}
            author={document.author?.name}
          />
        ))}
      </div>
    </div>
  );
}
