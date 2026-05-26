import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'se4f92gk',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true
})