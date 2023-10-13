import Image from "next/image";
import { Metadata } from "next";
import { getProduct } from "../../../../../sanity/lib/query";
import type { ProductType } from "../../../types";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "../../../../../sanity/lib/image";

type Props = {
  params: {
    product: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.product;
  const product: ProductType = await getProduct(slug);

  return {
    title: `${product.title} | Product`,
    description: product.description,
    openGraph: {
      images: product.mainImage?.image || "add-a-fallback-project-image-here",
      title: product.title,
      description: product.description,
    },
  };
}

const productComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="max-w-xl mx-auto mb-4 px-3 md:px-0">{children}</p>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul className="list-inside list-disc max-w-xl mx-auto mb-4 px-3 md:px-0">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-inside list-decimal max-w-xl mx-auto mb-4 px-3 md:px-0">
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

export default async function Product({ params }: Props) {
  const slug = params.product;
  const product: ProductType = await getProduct(slug);

  return (
    <section className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-8 md:gap-x-8 md:gap-y-3">
        <div className="col-span-3">
          <h1 className="font-semibold text-4xl mb-2 px-3 md:px-0">
            {product.title}
          </h1>
        </div>
        <div className="col-span-5">
          <Image
            src={urlForImage(product.mainImage)
              .width(800)
              .fit("max")
              .auto("format")
              .url()}
            width={800}
            height={460}
            alt={product.mainImage?.alt || product.title}
            priority={true}
          />
        </div>
        <div className="col-span-3">
          <PortableText value={product.body} components={productComponents} />
        </div>
      </div>
    </section>
  );
}
