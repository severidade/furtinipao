/* eslint-disable import/prefer-default-export */
import client from '../sanityClient.tsx';

import { SectionTemplateType } from '../types/SectionTemplateType.tsx';
import { SectionHeroWelcomeType } from '../types/HeroWelcomeType.tsx';

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

export async function fetchHeroWelcomeData(endpoint: string): Promise<SectionHeroWelcomeType[]> {
  // const query = `*[_type == "sectionHeroWelcome"]{
  if (!endpoint) {
    throw new Error('Endpoint inválido ou não fornecido');
  }
  const query = `*[_type == "${endpoint}"]{
    _id,
    title,
    subtitle,
    imagemDeFundo {
      imagemMobile {
        "url": image.asset->url,
        "altText": altText
      },
      imagemDesktop {
        "url": image.asset->url,
        "altText": altText
      }
    }
  }`;

  const errorMessage = 'Ocorreu um erro ao buscar os dados do Hero Welcome:';
  return fetchData<SectionHeroWelcomeType[]>(query, errorMessage);
}

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

  const errorMessage = 'Ocorreu um erro ao buscar os dados sobre os pães';
  return fetchData<SectionTemplateType[]>(query, errorMessage);
}

export async function fetchAddressData(endpoint: string): Promise<SectionTemplateType[]> {
  if (!endpoint) {
    throw new Error('Endpoint inválido ou não fornecido');
  }
  const query = `*[_type == "${endpoint}"]{
    header {
      title,
      subtitle
    },
    content[] {
      ..., 
      markDefs,
      children[] {
        text
      }
    },
    "gallerySlider": gallerySlider[]{
      "image": {
        "_id": _key, 
        "url": image.asset->url,
        "altText": image.altText
      }
    }
  }`;

  const errorMessage = 'Ocorreu um erro ao buscar os dados sobre os pães';
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

export async function fetchOpeningHoursData(endpoint: string): Promise<SectionTemplateType[]> {
  if (!endpoint) {
    throw new Error('Endpoint inválido ou não fornecido');
  }

  // console.log('Endpoint recebido:', endpoint);

  const query = `*[_type == "${endpoint}"]{
    "header": header,
    subtitle,
    content,
    videoSection {
      "videoUrl": videoFile.asset->url,
      "poster": {
        "url": posterImage.asset->url,
        "altText": posterImage.altText
      }
    },
    callToActionBt {
      phoneNumber,
      buttonTitle,
      message,
      model
    }
  }`;

  // console.log('Query executada:', query);

  const errorMessage = 'Ocorreu um erro ao buscar os dados da seção de Horários de Funcionamento:';
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

export async function fetchHighlightGalleryData(endpoint: string): Promise<SectionTemplateType[]> {
  if (!endpoint) {
    throw new Error('Endpoint inválido ou não fornecido');
  }

  const query = `*[_type == "${endpoint}"]{
    "gallerySlider": gallerySlider[]{
      "_id": _key, 
      "url": image.asset->url,
      "altText": altText,
      "title": title
    }
  }`;

  const errorMessage = 'Ocorreu um erro ao buscar os dados da Galeria de Imagens:';
  return fetchData<SectionTemplateType[]>(query, errorMessage);
}

export async function fetchWhatsAppButtonData(): Promise<{ phoneNumber: string; message: string }> {
  const query = `*[_type == "whatsAppButton"]{
    phoneNumber,
    message
  }`;

  const errorMessage = 'Ocorreu um erro ao buscar os dados do botão WhatsApp:';
  return fetchData<{ phoneNumber: string; message: string }>(query, errorMessage);
}
