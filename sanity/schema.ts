import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import collection from './schemas/collection'
import post from './schemas/post'
import author from './schemas/author'
import product from './schemas/product'
import hero from './schemas/hero'
import recipe from './schemas/recipe'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, collection, blockContent, product, hero, recipe],
}
