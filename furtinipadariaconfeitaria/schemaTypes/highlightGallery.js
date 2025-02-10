export default {
  name: 'highlightGallery',
  title: 'Seção - Galeria de Imagens',
  type: 'document',
  fields: [
    {
      name: 'gallerySlider',
      title: 'Seleção de imagens que constam na galeria principal',
      description: 'O formato da imagem é 200 × 300 px (largura × altura).',
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
            },
            {
              name: 'altText',
              title: 'Texto Alternativo',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Título da Imagem',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero Galeria de Imagens',
      };
    },
  },
};