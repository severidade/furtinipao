import { defineType } from 'sanity';

export default defineType({
  name: 'openingHours',
  title: 'Seção - Horários',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'videoSection',
      title: 'Vídeo',
      type: 'object',
      fields: [
        {
          name: 'videoFile',
          title: 'Arquivo de Vídeo',
          type: 'file',
          options: {
            accept: 'video/*',
          },
        },
        {
          name: 'posterImage',
          title: 'Imagem de Garantia',
          type: 'image',
          description: 'Esta imagem é exibida enquanto o vídeo não carrega.',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'altText',
              title: 'Texto Alternativo',
              type: 'string',
              description: 'Descrição da imagem para acessibilidade e SEO.',
            },
          ],
        },
      ],
    },
    {
      name: 'callToActionBt',
      title: 'Botão de Chamada para Ação',
      type: 'object',
      fields: [
        {
          name: 'phoneNumber',
          title: 'Número de Telefone',
          type: 'string',
          description: 'Formato internacional: 5531xxxxxxxxx',
        },
        {
          name: 'buttonTitle',
          title: 'Título do Botão',
          type: 'string',
        },
        {
          name: 'message',
          title: 'Mensagem Padrão',
          type: 'string',
          description: 'Mensagem automática no WhatsApp.',
        },
        {
          name: 'model',
          title: 'Modelo de Botão',
          type: 'string',
          options: {
            list: [
              { title: 'Eventos', value: 'event' },
              { title: 'Pães', value: 'breads' },
              { title: 'Reserva', value: 'reserv' },
            ],
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'videoSection.posterImage',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || 'Sem título',
        media,
      };
    },
  },
});
