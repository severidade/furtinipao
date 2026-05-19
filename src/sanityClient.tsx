import { createClient, SanityClient } from '@sanity/client';
import { SanityConfig } from './types/SanityConfig.tsx';

const sanityConfig: SanityConfig = {
  projectId: 'henuw5g0',
  dataset: 'production',
  apiVersion: '2024-01-30',
  useCdn: true,
  // Opcional: adicionar token se precisar de acesso a conteúdo privado
  // token: 'seu-token-aqui'
};

const client: SanityClient = createClient(sanityConfig);

export default client;
export type { SanityConfig };
