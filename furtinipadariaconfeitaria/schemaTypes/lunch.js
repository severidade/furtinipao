// schemas/lunch.js
import { defineType } from 'sanity';

export default defineType({
  name: 'lunch',
  title: 'Almoço Executivo',
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
        {
          name: 'figure',
          title: 'Imagem do Prato',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'altText',
              title: 'Texto Alternativo',
              type: 'string', // Campo de texto simples para descrição alternativa
              description: 'Texto que descreve a imagem para acessibilidade',
            },
          ],
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
      title: 'header.title',      // Seleciona o título do header
      subtitle: 'header.subtitle', // Seleciona o subtítulo
      media: 'header.figure',     // Seleciona a imagem do prato
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Sem título', 
        subtitle: subtitle || 'Sem subtítulo',
        media: media, // Aqui você define a imagem de preview
      };
    },
  },
});
