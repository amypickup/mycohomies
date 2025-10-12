import type { HeroType, CategoryWithDocumentsType } from "@app/types";
import { getHeros, getCategoryWithDocuments } from "@sanity/lib/query";
import SanityHero from "@components/SanityHero";
import PageBreak from "@components/PageBreak";
import { urlForImage } from "@sanity/lib/image";
import { Card } from "@components/ui/card/Card";

export default async function Home() {
  const heros: HeroType[] = await getHeros();
  const handmade: CategoryWithDocumentsType =
    await getCategoryWithDocuments("handmade");
  const ai: CategoryWithDocumentsType = await getCategoryWithDocuments("ai");

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-6">
      {handmade.relatedDocuments.length > 0 && (
        <section>
          <PageBreak title="latest recipes . handmade with love" />
          <div className="grid grid-rows-1 md:grid-cols-3 gap-4 my-9">
            {handmade.relatedDocuments.map((document) => (
              <Card
                key={document._id}
                href={`recipes/${document.slug.current}`}
                image={urlForImage(document.mainImage).width(400).url()}
                title={document.title}
                author={document.author?.name}
              />
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
      {ai.relatedDocuments.length > 0 ? (
        <section>
          <PageBreak title={ai.title.toLowerCase()} />
          <div className="grid grid-rows-1 md:grid-cols-3 gap-4 my-9">
            {ai.relatedDocuments.map((document) => (
              <Card
                key={document._id}
                href={`${document._type}s/${document.slug.current}`}
                image={urlForImage(document.mainImage).width(400).url()}
                title={document.title}
                description={document.description}
                author={document.author?.name}
              />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
