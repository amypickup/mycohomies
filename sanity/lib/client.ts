import { createClient } from 'next-sanity'

import { apiVersion, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId,
  useCdn,
})
