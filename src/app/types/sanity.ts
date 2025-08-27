import { Url } from "next/dist/shared/lib/router/router";
import { PortableTextBlock, Slug, Image } from "sanity";

export type AuthorType = {
  _id: string;
  name: string;
  slug: Slug;
  image: {
    alt: string;
    image: string;
  };
  bio: PortableTextBlock[];
  relatedRecipes: RecipeType[];
};

export type PostType = {
  _id: string;
  _type: string;
  name: string;
  title: string;
  description: string;
  slug: Slug;
  author: AuthorType;
  mainImage: {
    alt: string;
    image: string;
  };
  body: PortableTextBlock[];
  publishedAt: string;
};

type IngredientSection = {
  sectionTitle: string;
  sectionIngredients: string[];
  _key: string;
};

export type RecipeType = {
  _id: string;
  _type: string;
  name: string;
  title: string;
  description: string;
  story: string;
  slug: Slug;
  author: AuthorType;
  mainImage: {
    alt: string;
    image: string;
  };
  time: string;
  ingredientsImport: IngredientSection[];
  instructions: string[];
  publishedAt: string;
};

export type RecipeImportType = {
  _id: string;
  _type: string;
  title: string;
  description: string;
  story: string;
  slug: Slug;
  time: string;
  ingredientsImport: IngredientSection[];
  instructions: string[];
};

export type ProductType = {
  _id: string;
  _type: string;
  title: string;
  description: string;
  slug: Slug;
  mainImage: {
    alt: string;
    image: string;
  };
  productImages: Image[];
  body: PortableTextBlock[];
  publishedAt: string;
};

export type HeroType = {
  _id: string;
  _type: string;
  title: string;
  lead: string;
  linkUrl: Url;
  image: {
    _type: string;
    alt: string;
    image: string;
    asset: {
      _type: string;
      _ref: string;
    };
  };
};

export type CategoryWithDocumentsType = {
  _id: string;
  _type: string;
  title: string;
  slug: Slug;
  description: string;
  relatedDocuments: PostType[];
};

export type DocumentType = {
  _id: string;
  _type: string;
  title: string;
  description: string;
  slug: Slug;
  author: AuthorType;
  mainImage: {
    alt: string;
    image: string;
  };
  categories: string[];
  publishedAt: string;
};
