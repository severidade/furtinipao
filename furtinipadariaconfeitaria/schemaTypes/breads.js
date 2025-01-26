// schemas/breads.js
import { defineType } from 'sanity';

export default defineType({
  name: 'breads',
  title: 'Seção - Fornadas',
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
      title: 'Detalhes adicionais sobre os pães',
      type: 'string', // Changed to blockContent
    },
    {
      name: 'callToActionBt',
      title: 'Botão de Chamada para Ação',
      type: 'object',
      fields: [
        {
          name: 'model',
          title: 'Modelo de botão',
          type: 'string',
          options: {
            list: [
              { title: 'Eventos', value: 'event' },
              { title: 'Pães', value: 'breads' },
              { title: 'Reserva', value: 'reserv' },
            ],
          },
        },
        {
          name: 'buttonTitle',
          title: 'Título do Botão',
          type: 'string',
        },
        {
          name: 'phoneNumber',
          title: 'Número de Telefone',
          type: 'string',
          description: 'Insira o número de telefone no formato internacional, incluindo o código do país e o DDD. Exemplo: 5531xxxxxxxxx',
        },

        {
          name: 'message',
          title: 'Mensagem padrão exibida automaticamente ao iniciar uma conversa no WhatsApp.',
          type: 'string',
        },

      ],
    },
    {
      name: 'gallerySlider',
      title: 'Galeria de Pães',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'breadName',
              title: 'Nome do Pão',
              type: 'string',
            },
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
                  title: 'Texto Alternativo',
                  type: 'string',
                  description: 'Texto que descreve a imagem para acessibilidade',
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'breadName',
              media: 'image',
            },
            prepare(selection) {
              const { title, media } = selection;
              return {
                title: title || 'Sem nome',
                media: media,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'header.title',
      subtitle: 'header.subtitle',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title || 'Sem título',
        subtitle: subtitle || 'Sem subtítulo',
      };
    },
  },
});