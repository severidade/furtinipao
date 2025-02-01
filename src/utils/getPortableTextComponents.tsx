/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
// src/utils/getPortableTextComponents.ts

export const portableTextComponents = {
  types: {
    block: ({ value }: { value: any }) => {
      const text = value.children.map((child: any) => child.text).join(' ');

      // Se for um item de lista, retorna um <li>
      if (value.listItem) {
        return <li>{text}</li>;
      }

      switch (value.style) {
        case 'h1':
          return <h1>{text}</h1>;
        case 'h2':
          return <h2>{text}</h2>;
        case 'h3':
          return <h3>{text}</h3>;
        case 'blockquote':
          return <blockquote>{text}</blockquote>;
        default:
          return <p>{text}</p>;
      }
    },
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => <ul>{children}</ul>,
    number: ({ children }: { children: React.ReactNode }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => <li>{children}</li>,
    number: ({ children }: { children: React.ReactNode }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => <strong>{children}</strong>,
    em: ({ children }: { children: React.ReactNode }) => <em>{children}</em>,
    underline: ({ children }: { children: React.ReactNode }) => <u>{children}</u>,
  },
};

// Função para retornar os components
export const getPortableTextComponents = () => portableTextComponents;
