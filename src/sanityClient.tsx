import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Mude para VITE_
if (!import.meta.env.VITE_SANITY_PROJECT_ID || !import.meta.env.VITE_SANITY_DATASET) {
  throw new Error('As variáveis de ambiente do Sanity não foram configuradas corretamente.');
}

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2023-01-24',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
// export default client;
