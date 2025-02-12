/* eslint-disable import/prefer-default-export */
import client from '../sanityClient.tsx';

// import { SectionTemplateType } from '../types/SectionTemplateType.tsx';
// import { SectionHeroWelcomeType } from '../types/HeroWelcomeType.tsx';

const queries: Record<string, string> = {
  sectionHeroWelcome: `*[_type == "sectionHeroWelcome"]{
    _id,
    title,
    subtitle,
    backgroundImage {
      imagemMobile { "url": image.asset->url, "altText": altText },
      imagemDesktop { "url": image.asset->url, "altText": altText }
    }
  }`,
  lunch: `*[_type == "lunch"]{
    id,
    header { title, subtitle, "figure": { "url": figure.asset->url, "altText": figure.altText } },
    content
  }`,
  breads: `*[_type == "breads"]{
    header { title, subtitle },
    content,
    callToActionBt { model, buttonTitle, phoneNumber, message },
    "gallerySlider": gallerySlider[]{ breadName, "image": { "url": image.asset->url, "altText": image.altText } }
  }`,
  sectionAddress: `*[_type == "sectionAddress"]{
    header { title, subtitle },
    content[] { ..., markDefs, children[] { text } },
    "gallerySlider": gallerySlider[]{ "image": { "_id": _key, "url": image.asset->url, "altText": image.altText } }
  }`,
  history: `*[_type == "history"]{
    "figure": { "url": figure.asset->url, "altText": figure.altText },
    header { title, subtitle },
    content
  }`,
  openingHours: `*[_type == "openingHours"]{
    "header": header,
    subtitle,
    content,
    videoSection { "videoUrl": videoFile.asset->url, "poster": { "url": posterImage.asset->url, "altText": posterImage.altText } },
    callToActionBt { phoneNumber, buttonTitle, message, model }
  }`,
  events: `*[_type == "events"]{
    "figure": { "url": figure.asset->url, "altText": figure.altText },
    header { title, subtitle },
    content,
    callToActionBt { phoneNumber, buttonTitle, message, model }
  }`,
  highlightGallery: `*[_type == "highlightGallery"]{
    "gallerySlider": gallerySlider[]{ "_id": _key, "url": image.asset->url, "altText": altText, "title": title }
  }`,
  whatsAppButton: '*[_type == "whatsAppButton"]{ phoneNumber, message }',
};

export async function fetchSanityData<T>(endpoint: string): Promise<T[]> {
  if (!endpoint || !queries[endpoint]) {
    throw new Error(`Endpoint inválido ou não reconhecido: ${endpoint}. Opções disponíveis: ${Object.keys(queries).join(', ')}`);
  }
  try {
    return await client.fetch(queries[endpoint]);
  } catch (error) {
    console.error(`Erro ao buscar dados do endpoint: ${endpoint}`, error);
    throw error;
  }
}
