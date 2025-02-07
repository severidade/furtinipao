export default {
  name: "sectionHeroWelcome",
  title: "Seção - Hero",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(100),
    },
    {
      name: "subtitle",
      title: "Subtítulo",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(150),
    },
    {
      name: "imagemDeFundo",
      title: "Imagem de Fundo",
      type: "object",
      fields: [
        {
          name: "imagemMobile",
          title: "Versão Mobile",
          type: "object",
          fields: [
            {
              name: "image",
              title: "Arquivo de Imagem",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "altText",
              title: "Texto Alternativo",
              type: "string",
              description: "Descreve imagem para SEO",
            },
          ],
        },
        {
          name: "imagemDesktop",
          title: "Versão Desktop",
          type: "object",
          fields: [
            {
              name: "image",
              title: "Arquivo de Imagem",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "altText",
              title: "Texto Alternativo",
              type: "string",
              description: "Descreve imagem para SEO",
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      desktopImage: "imagemDeFundo.imagemDesktop.image.asset.url",
      mobileImage: "imagemDeFundo.imagemMobile.image.asset.url",
    },
    prepare({ title, desktopImage, mobileImage }) {
      return {
        title,
        media: desktopImage || mobileImage ? { asset: { url: desktopImage || mobileImage } } : undefined,
      };
    },
  },
};
