# Documentação da Aplicação FurtiniPão

## Sumário

1. [Visão Geral](#vis%C3%A3o-geral)
2. [Dependências](#depend%C3%AAncias)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Componentes Principais](#componentes-principais)
5. [Seções](#se%C3%A7%C3%B5es)
6. [Dados Estáticos](#dados-est%C3%A1ticos)

---

## Visão Geral

O projeto **FurtiniPão** é uma aplicação desenvolvida em React com o objetivo de criar uma landing page para a Cafeteria Pão do Furtini. A aplicação inclui animações, componentes reutilizáveis e dados estáticos que, no futuro, podem ser substituídos por uma API. A aplicação é construída com Vite para otimização do fluxo de desenvolvimento e performance.

---

## Dependências

### Produção

As seguintes bibliotecas são utilizadas para funcionalidades da aplicação:

- **framer-motion**: Animações avançadas para os componentes.
- **html-react-parser**: Parse de HTML dinâmico para elementos React.
- **motion**: Integração de animações.
- **react** e **react-dom**: Core da biblioteca React.
- **react-device-detect**: Identificação de dispositivos e orientação.
- **react-slick** e **slick-carousel**: Galerias e sliders estilizados.

### Desenvolvimento

As ferramentas utilizadas no ambiente de desenvolvimento são:

- **@eslint/js** e plugins relacionados: Padronização do código.
- **@vitejs/plugin-react-swc**: Suporte a React e otimizações via SWC.
- **TypeScript** e **typescript-eslint**: Tipagem estática e suporte ao ESLint.
- **Vite**: Ferramenta para desenvolvimento e build rápido.

---

## Estrutura do Projeto

```plaintext
src/
├── components/
│   ├── FixedWhatsAppButton/
│   ├── Footer/
│   ├── Heder/
│   ├── HeroImage/
│   ├── HeroWelcome/
│   ├── HighlightGallery/
│   └── OrientationDetectorDevice/
├── sections/
│   ├── SectionAddress/
│   ├── SectionBreads/
│   ├── SectionLunch/
│   ├── SectionOpeningHours/
│   └── SectionTemplate/
├── data/
│   ├── BreadsData.tsx
│   ├── EventsData.tsx
│   ├── HighlightGalleryData.tsx
│   ├── HistoryData.tsx
│   ├── LunchData.tsx
│   └── SectionAddressData.tsx
├── CSS/
│   ├── App.css
│   ├── Halogenfonts.css
│   └── Macklinfonts.css
├── App.tsx
└── main.tsx
```

---

## Componentes Principais

### **Heder**
- Componente responsável pelo cabeçalho da aplicação.
- Inclui logotipo e navegação.

### **HeroImage** e **HeroWelcome**
- Composição da seção hero.
- Exibe uma imagem principal e uma mensagem de boas-vindas.

### **HighlightGallery**
- Galeria com itens destacados, recebendo dados via props.
- Baseada em "react-slick" para sliders.

### **FixedWhatsAppButton**
- Botão fixo que redireciona ao WhatsApp da cafeteria.

### **Footer**
- Contém informações de rodapé, como links e direitos autorais.

### **OrientationDetectorDevice**
- Detecta orientação e tipo de dispositivo do usuário.
- Baseado na biblioteca "react-device-detect".

---

## Seções

### **SectionBreads**
- Exibe os produtos de panificação da cafeteria.
- Dados fornecidos via arquivo estático `BreadsData.tsx`.

### **SectionAddress**
- Exibe o endereço da cafeteria, com dados carregados de `SectionAddressData.tsx`.

### **SectionLunch**
- Exibe os pratos do almoço, utilizando dados do arquivo `LunchData.tsx`.

### **SectionOpeningHours**
- Informa os horários de funcionamento.

### **SectionTemplate**
- Estrutura reutilizável para exibição de conteúdo, como histórico e eventos.
- Dados passados via props.

---

## Dados Estáticos

Os dados atualmente utilizados na aplicação estão localizados na pasta `src/data/` e incluem:

- **HighlightGalleryData.tsx**: Itens destacados para a galeria.
- **LunchData.tsx**: Cardápio de almoço.
- **BreadsData.tsx**: Produtos de panificação.
- **SectionAddressData.tsx**: Endereço da cafeteria.
- **HistoryData.tsx**: Informações históricas.
- **EventsData.tsx**: Informações sobre eventos futuros.

---

## Observações

- As imagens podem ser otimizadas utilizando ferramentas como [Squoosh](https://squoosh.app/).
- O projeto está configurado para utilizar ESLint com as regras do Airbnb, garantindo a consistência do código.

---

## Próximos Passos

1. Implementar backend para substituir os dados estáticos.
2. Melhorar a responsividade para dispositivos móveis.
3. Otimizar o desempenho de componentes pesados como sliders e galerias.

