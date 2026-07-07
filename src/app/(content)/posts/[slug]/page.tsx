import Image from "next/image";
import { Metadata } from "next";
import { getPost } from "@sanity/lib/query";
import type { PostType } from "@app/types";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@sanity/lib/image";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post: PostType = await getPost(slug);

  return {
    title: `${post.title} | Post`,
    description: post.description,
    openGraph: {
      images: post.mainImage?.image || "add-a-fallback-project-image-here",
      title: post.title,
      description: post.description,
    },
  };
}

const postComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="max-w-xl mx-auto mb-4 px-6 md:px-0">{children}</p>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul className="list-inside list-disc max-w-xl mx-auto mb-4 px-6 md:px-0">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-inside list-decimal max-w-xl mx-auto mb-4 px-6 md:px-0">
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value, isInline }) => {
      return (
        <Image
          className="mb-2"
          src={urlForImage(value)
            .width(isInline ? 100 : 800)
            .fit("max")
            .auto("format")
            .url()}
          width={800}
          height={460}
          alt={value.alt || " "}
          loading="lazy"
        />
      );
    },
  },
};

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const post: PostType = await getPost(slug);
  const publishedTime = new Date(post.publishedAt).toLocaleTimeString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <main className="max-w-6xl mx-auto">
      <div className="max-w-3xl mx-auto py-6">
        <div className="block">
          <h1 className="font-bold max-w-xl text-4xl mx-auto mb-2 px-6 md:px-0">
            {post.title}
          </h1>
          <p className="max-w-xl mx-auto mb-4 px-6 md:px-0">
            {post.description}
          </p>
          <div className="max-w-3xl mb-4">
            <Image
              src={urlForImage(post.mainImage)
                .width(800)
                .fit("max")
                .auto("format")
                .url()}
              width={800}
              height={460}
              alt={post.mainImage?.alt || post.name}
            />
          </div>
          {/* Author Section */}
          <div className="max-w-xl mx-auto mb-4 pl-6 md:pl-0">
            <Image
              width={40}
              height={40}
              src={urlForImage(post.author.image).width(120).height(120).url()}
              alt={post.author.name}
              className="inline-block mr-2 rounded-full"
            />
            <div className="inline-block text-sm align-middle">
              <div>
                By{" "}
                <Link
                  href={`/authors/${post.author.slug.current}`}
                  className="font-medium text-blue-600 hover:underline"
                >
                  {post.author.name}
                </Link>
              </div>
              <div className="font-light text-xs">{publishedTime}</div>
            </div>
          </div>
          {/* Body */}
          <PortableText value={post.body} components={postComponents} />
        </div>
      </div>
    </main>
  );
}
