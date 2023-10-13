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
  productImages: Image,
  body: PortableTextBlock[],
  publishedAt: string,
};