import { defineType } from 'sanity';

export default defineType({
  name: 'history',
  title: 'Seção - História',
  type: 'document',
  fields: [
    {
      name: 'figure',
      title: 'Imagem',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'altText',
          title: 'Texto Alternativo',
          type: 'string',
          description: 'Texto que descreve a imagem para acessibilidade',
        },
      ],
    },
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
          description: 'Opcional. Um texto curto abaixo do título.',
        },
      ],
    },
    {
      name: 'content',
      title: 'Conteúdo',
      type: 'blockContent', // Use 'blockContent' caso queira suportar rich text
      description: 'O texto principal da seção de história.',
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
