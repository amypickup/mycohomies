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