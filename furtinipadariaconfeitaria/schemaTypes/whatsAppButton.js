// schemas/whatsAppButton.js
import { defineType } from 'sanity';

export default defineType({
  name: 'whatsAppButton',
  title: 'Botão WhatsApp',
  type: 'document',
  fields: [
    {
      name: 'phoneNumber',
      title: 'Número de telefone com o código do país',
      type: 'string',
      description: '(ex: 5531992456878)',
    },
    {
      name: 'message',
      title: 'Mensagem que será enviada no WhatsApp ao clicar no botão',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'phoneNumber',
      subtitle: 'message',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: `Este é o botão fixo do WhatsApp`,
        subtitle: subtitle ? subtitle : 'Sem mensagem',
      };
    },
  },
});
