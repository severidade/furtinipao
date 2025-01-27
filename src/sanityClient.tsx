import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Verificando as variáveis de ambiente
if (!import.meta.env.VITE_SANITY_PROJECT_ID || !import.meta.env.VITE_SANITY_DATASET) {
  throw new Error('As variáveis de ambiente do Sanity não foram configuradas corretamente.');
}

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // Usando as variáveis com o prefixo VITE_
  dataset: import.meta.env.VITE_SANITY_DATASET, // Usando as variáveis com o prefixo VITE_
  useCdn: true,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2023-01-24', // Valor padrão para apiVersion
});

// Configurando o builder de URLs para imagens
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// Caso precise exportar o cliente diretamente:
// export default client;
