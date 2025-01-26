import { defineType } from 'sanity';

export default defineType({
  name: 'lunch',
  title: 'Seção - Almoço Executivo',
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
      name: 'figure',
      title: 'Imagem de destaque na seção',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'altText',
          title: 'Texto Alternativo',
          type: 'string',
          description: 'Texto que descreve a imagem (Importante para acessibilidade e SEO',
        },
      ],
    },
    {
      name: 'content',
      title: 'Conteúdo',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'header.title',
      subtitle: 'header.subtitle',
      media: 'figure',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Sem título', 
        subtitle: subtitle || 'Sem subtítulo',
        media: media,
      };
    },
  },
});