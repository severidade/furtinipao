import { createClient, SanityClient } from '@sanity/client';
import { SanityConfig } from './types/SanityConfig.tsx';

const sanityConfig: SanityConfig = {
  projectId: 'henuw5g0',
  dataset: 'production',
  apiVersion: '2024-01-30', // usando a data atual
  useCdn: true,
  // Opcional: adicione token se precisar de acesso a conteúdo privado
  // token: 'seu-token-aqui'
};

const client: SanityClient = createClient(sanityConfig);

export default client;

// Se precisar exportar o tipo
export type { SanityConfig };
