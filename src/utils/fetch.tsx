/* eslint-disable import/prefer-default-export */
// utils/fetch.tsx
import { client } from '../sanityClient.tsx';
import { SectionTemplateType } from '../types/SectionTemplateType.tsx';

// Função genérica para buscar dados no Sanity
async function fetchData<T>(query: string, errorMessage: string): Promise<T> {
  try {
    const data: T = await client.fetch(query);
    return data;
  } catch (error) {
    console.error(errorMessage, error);
    throw error;
  }
}

// Função específica para buscar os dados do na tabela Lunch
export async function fetchLunchData(endpoint: string): Promise<SectionTemplateType[]> {
  if (!endpoint) {
    throw new Error('Endpoint inválido ou não fornecido');
  }
  const query = `*[_type == "${endpoint}"]{
    id,
    header {
      title,
      subtitle,
      "figure": {
        "url": figure.asset->url,
        "altText": figure.altText
      }
    },
    
    content
  }`;

  const errorMessage = 'Ocorreu um erro ao buscar os dados do almoço:';
  return fetchData<SectionTemplateType[]>(query, errorMessage);
}

export async function fetchBreadsData(endpoint: string): Promise<SectionTemplateType[]> {
  if (!endpoint) {
    throw new Error('Endpoint inválido ou não fornecido');
  }
  const query = `*[_type == "${endpoint}"]{
    header {
      title,
      subtitle
    },
    content,
    callToActionBt {
      model,
      buttonTitle,
      phoneNumber,
      message
    },
    "gallerySlider": gallerySlider[]{
      breadName,
      "image": {
        "url": image.asset->url,
        "altText": image.altText
      }
    }
  }`;

  const errorMessage = 'Ocorreu um erro ao buscar os dados do almoço:';
  return fetchData<SectionTemplateType[]>(query, errorMessage);
}

export async function fetchHistoryData(endpoint: string): Promise<SectionTemplateType[]> {
  if (!endpoint) {
    throw new Error('Endpoint inválido ou não fornecido');
  }

  const query = `*[_type == "${endpoint}"]{
    "figure": {
      "url": figure.asset->url,
      "altText": figure.altText
    },
    header {
      title,
      subtitle
    },
    content
  }`;

  const errorMessage = 'Ocorreu um erro ao buscar os dados da seção História:';
  return fetchData<SectionTemplateType[]>(query, errorMessage);
}

export async function fetchEventsData(endpoint: string): Promise<SectionTemplateType[]> {
  if (!endpoint) {
    throw new Error('Endpoint inválido ou não fornecido');
  }

  const query = `*[_type == "${endpoint}"]{
    "figure": {
      "url": figure.asset->url,
      "altText": figure.altText
    },
    header {
      title,
      subtitle
    },
    content,
    callToActionBt{
      phoneNumber,
      buttonTitle,
      message,
      model
    }
  }`;

  const errorMessage = 'Ocorreu um erro ao buscar os dados da seção Eventos:';
  return fetchData<SectionTemplateType[]>(query, errorMessage);
}
