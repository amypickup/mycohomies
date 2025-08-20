import Image from "next/image";
//import { Metadata } from "next";
import { getAuthor } from "@sanity/lib/query";
import type { AuthorType } from "@app/types";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@sanity/lib/image";

interface Props {
  params: Promise<{ slug: string }>;
}

// Dynamic metadata for SEO
/*
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.author;
  const author: AuthorType = await getAuthor(slug);

  return {
    title: `${author.name} | Recipe`,
    description: author.description,
    openGraph: {
      images: author.mainImage?.image || "add-a-fallback-project-image-here",
      title: author.title,
      description: author.description,
    },
  };
}
*/

const authorBioComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-1 text-sm font-light text-gray-900">{children}</p>
    ),
  },
};

export default async function Author({ params }: Props) {
  const { slug } = await params;
  const author: AuthorType = await getAuthor(slug);

  return (
    <main className="pt-12 max-w-3xl mx-auto px-3 md:px-0">
      <div className="md:flex mb-4 px-3 md:px-0">
        <div className="md:basis-1/6">
          <Image
            width={100}
            height={100}
            src={urlForImage(author.image).width(300).height(300).url()}
            alt={author.name}
            className="mb-4 md:mr-4 rounded-full"
          />
        </div>
        <div className="md:basis-3/4 text-sm">
          <div className="text-3xl">{author.name}</div>
          <PortableText value={author.bio} components={authorBioComponents} />
        </div>
      </div>
      <div className="border-pink-200 border-opacity-20 border-t-4 py-4">
        {author.relatedRecipes.map((doc) => {
          const datePublished = new Date(doc.publishedAt).toLocaleTimeString(
            "en-US",
            {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }
          );

          return (
            <a
              key={doc._id}
              href={`/${doc._type}s/${doc.slug.current}`}
              className="group md:flex"
            >
              <div className="md:basis-1/6">{datePublished}</div>
              <div className="md:basis-1/2 px-3 md:px-0 mb-4">
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-indigo-700">
                  {doc.title}
                </h3>
                <p className="text-smgroup-hover:text-indigo-700">
                  {doc.description}
                </p>
                <p className="text-xs font-light uppercase group-hover:text-indigo-700">
                  By {doc.author.name}
                </p>
              </div>
              <div className="mb-4 md:auto">
                {doc.mainImage ? (
                  <Image
                    src={urlForImage(doc.mainImage).width(600).url()}
                    width={200}
                    height={200}
                    alt={doc.title}
                    className="object-contain w-500 h-500 group-hover:invert"
                  />
                ) : null}
              </div>
            </a>
          );
        })}
      </div>
    </main>
  );
}
