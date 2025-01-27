import { defineType } from 'sanity';

export default defineType({
  name: 'events',
  title: 'Seção - Eventos',
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
          description: 'Texto que descreve a imagem para acessibilidade.',
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
        },
      ],
    },
    {
      name: 'content',
      title: 'Descrição do Evento',
      type: 'text',
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
          description: 'Insira o número de telefone no formato internacional, incluindo o código do país e o DDD. Exemplo: 5531xxxxxxxxx',
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
          description: 'Mensagem exibida automaticamente ao iniciar uma conversa no WhatsApp.',
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
