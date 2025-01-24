import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Validação das variáveis de ambiente
if (!process.env.REACT_APP_SANITY_PROJECT_ID || !process.env.REACT_APP_SANITY_DATASET) {
  throw new Error('As variáveis de ambiente do Sanity não foram configuradas corretamente.');
}

// Configuração do cliente Sanity
const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // ID do projeto Sanity
  dataset: process.env.REACT_APP_SANITY_DATASET, // Dataset configurado no Sanity
  useCdn: true, // Ativa o uso de CDN para maior performance
  apiVersion: process.env.REACT_APP_SANITY_API_VERSION || '2023-01-24', // Versão da API
});

// Configuração para manipulação de URLs de imagens
const builder = imageUrlBuilder(client);

// Usando `unknown` ou um tipo genérico
export const urlFor = (source) => builder.image(source);
export default client;
