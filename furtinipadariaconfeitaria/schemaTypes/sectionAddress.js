import { defineType } from 'sanity';

export default defineType({
  name: 'sectionAddress',
  title: 'Seção - Endereço',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Cabeçalho',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
        },
      ],
    },
    {
      name: 'content',
      title: 'Detalhes adicionais',
      type: 'blockContent',
    },
    {
      name: 'gallerySlider',
      title: 'Galeria de fotos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Imagem',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'altText',
                  title: 'Texto Alternativo - Descreve imagem para SEO',
                  type: 'string',
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'image.altText', // Pegando o texto alternativo da imagem
              media: 'image',
            },
            prepare(selection) {
              const { title, media } = selection;
              return {
                title: title || 'Sem descrição',
                media: media,
              };
            },
          },
        },
      ],
    }
  ],
  preview: {
    select: {
      title: 'header.title',
      subtitle: 'header.subtitle'
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title || 'Sem descrição',
        subtitle: subtitle
      };
    },
  }
});