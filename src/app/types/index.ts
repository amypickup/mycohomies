import { Url } from "next/dist/shared/lib/router/router";
import { PortableTextBlock, Slug, Image } from "sanity";

export type ProductType = {
  _id: string,
  _type: string,
  title: string,
  description: string,
  slug: Slug,
  mainImage: {
    alt: string,
    image: string
  },
  productImages: Image[],
  body: PortableTextBlock[],
  publishedAt: string,
};

export type HeroType = {
  _id: string,
  _type: string,
  title: string,
  lead: string,
  linkUrl: Url,
  image: {
    alt: string,
    image: string
  },
};
