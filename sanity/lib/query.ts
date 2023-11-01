import { groq } from "next-sanity";
import { client } from "./client";

export async function getProduct(slug: string) {
    return client.fetch(
      groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        _type,
        title,
        description,
        mainImage,
        productImages,
        publishedAt,
        body,
      }`,
      { slug }
    );
  }

export async function getFeaturedProducts() {
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      _type,
      title,
      description,
      mainImage,
    }`
  );
}

export async function getHeros() {
  return client.fetch(
    groq`*[_type == "hero"]{
      _id,
      title,
      lead,
      linkUrl,
      image,
    }`
  );
}