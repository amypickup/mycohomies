import type { HeroType, CategoryWithDocumentsType } from "@app/types";
import { getHeros, getCategoryWithDocuments } from "@sanity/lib/query";
import SanityHero from "@components/SanityHero";
import PageBreak from "@components/PageBreak";
import Image from "next/image";
import { urlForImage } from "@sanity/lib/image";
import localFont from "next/font/local";

const lemonMilk = localFont({ src: "../fonts/LEMONMILK-Bold.otf" });

export default async function Home() {
  const heros: HeroType[] = await getHeros();
  const handmade: CategoryWithDocumentsType =
    await getCategoryWithDocuments("handmade");
  const ai: CategoryWithDocumentsType = await getCategoryWithDocuments("ai");

  return (
    <div className="max-w-8xl px-6 md:px-8 lg:px-12 py-6">
      {handmade.relatedDocuments.length > 0 && (
        <section>
          <PageBreak title="latest recipes . handmade with love" />
          <div className="grid grid-rows-1 md:grid-cols-3 gap-4 my-9">
            {handmade.relatedDocuments.map((recipe) => (
              <a
                key={recipe._id}
                href={`recipes/${recipe.slug.current}`}
                className="group"
              >
                <div className="max-w-sm overflow-hidden bg-gray-200">
                  {recipe.mainImage ? (
                    <Image
                      src={urlForImage(recipe.mainImage).width(300).url()}
                      width={300}
                      height={300}
                      alt={recipe.title}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  ) : null}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{recipe.title}</h3>
                {recipe.author ? (
                  <p className="text-sm font-light">{recipe.author.name}</p>
                ) : null}
              </a>
            ))}
          </div>
        </section>
      )}
      <section>
        <PageBreak title="mushroom projects" />
        <div className="grid grid-rows-1 md:grid-cols-2 gap-4 my-9">
          {heros.map((hero) => (
            <SanityHero hero={hero} key={hero._id} />
          ))}
        </div>
      </section>
      <section>
        <PageBreak title={ai.title.toLowerCase()} />
        <div className="grid grid-rows-1 md:grid-cols-3 gap-4 my-9">
          {ai.relatedDocuments.map((doc) => (
            <a
              key={doc._id}
              href={`recipes/${doc.slug.current}`}
              className="group"
            >
              <div className="max-w-sm overflow-hidden bg-gray-200">
                {doc.mainImage ? (
                  <Image
                    src={urlForImage(doc.mainImage).width(300).url()}
                    width={300}
                    height={300}
                    alt={doc.title}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                ) : null}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{doc.title}</h3>
              {doc.author ? (
                <p className="text-sm font-light">{doc.author.name}</p>
              ) : null}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
