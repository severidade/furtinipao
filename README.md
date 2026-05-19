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

- **@portabletext/react, @sanity/client, @sanity/image-url**: Integração com Sanity.io para gerenciamento de conteúdo dinâmico.
- **@tanstack/react-query**: Gerenciamento de cache e requisições assíncronas.
- **framer-motion**: Animação de Componentes - usado no quadro de horários na seção horário de funcionamento.
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
│   ├──Breads
│   ├── ButtonTemplate
│   ├── CallUber
│   ├── FixedWhatsAppButton/
│   ├── Footer/
│   ├── Heder/
│   ├── HeroImage/
│   ├── HighlightGallery/
│   ├── HighlightGaleriaBreads
│   ├── HighlightGalleryAddress
│   ├── LoadingSpinner
│   ├── OrientationDetectorDevice/
│   └── VideoBg
├── sections/
│   ├── SectionAddress/
│   ├── SectionBreads/
│   ├── SectionHero/
│   ├── SectionHighlightGallery
│   ├── SectionLunch/
│   ├── SectionOpeningHours/
│   └── SectionTemplate/
├── data/
│   ├── OpeningHoursData.tsx
├── CSS/
│   ├── App.css
│   ├── index.css
│   ├── reset.css
│   ├── Halogenfonts.css
│   └── Macklinfonts.css
├── App.tsx
└── main.tsx
```

---

## Componentes de destaque

### **CallUber**
- Desenvolvi um botão de chamada para o Uber que facilita a navegação dos usuários até um destino específico. Ele tenta abrir diretamente o app do Uber nos dispositivos móveis e, caso não esteja instalado, redireciona automaticamente para a versão web do serviço. Essa abordagem melhora a experiência do usuário, garantindo que a funcionalidade esteja acessível independentemente da plataforma utilizada.

### **ButtonTemplate**
- Este componente rederiza um botão CTA. Os dados fornecidos ao componente ```ButtonTemplate``` são configurados pelo usuário através do Sanity. O usuário pode definir o número de telefone (phoneNumber), o título do botão (buttonTitle), a mensagem pré-configurada (message) e o modelo de estilo (model) diretamente na interface de gerenciamento de conteúdo. 

### **VideoBg**
- Este componente foi desenvolvido para exibir um vídeo de fundo de forma dinâmica, utilizando dados do Sanity.io ou valores padrão. Ele implementa um mecanismo para tentar a reprodução automática do vídeo e, caso isso não seja permitido pelo navegador (especialmente no iOS), um evento de touchstart é adicionado para iniciar a reprodução na primeira interação do usuário.

### **OrientationDetectorDevice**
Desenvolvi a função ```useDeviceInfo```, que inicialmente retornava apenas a largura do dispositivo e um booleano indicando se era um mobile com base no tamanho da tela. O problema era que, com essa abordagem, qualquer dispositivo com menos de 1024px de largura era considerado móvel. Agora, implementei uma melhoria utilizando ```react-device-detect```, aplicando uma dupla verificação para garantir que apenas dispositivos móveis reais sejam identificados, evitando falsos positivos em navegadores desktop redimensionados. Além disso, bloqueio o scroll enquanto o dispositivo está na horizontal, garantindo que a interface permaneça no mesmo ponto ao voltar para a posição vertical.
---

## Seções

### **SectionBreads**
- Exibe os produtos de panificação da cafeteria.
- Botão para fazer pedidos de pães

### **SectionAddress**
- Exibe o endereço da cafeteria e contém o botão para chamar o Uber.

### **SectionLunch**
- Comunica horário de funcionamento do espaço para para o almoço. 

### **SectionOpeningHours**
- Informa os horários de funcionamento.

### **SectionTemplate**
- Estrutura reutilizável para exibição de conteúdo, como histórico e eventos.
- Dados passados via props.

---

## Dados Estáticos

Os dados atualmente utilizados na aplicação estão localizados na pasta `src/data/` e incluem:
- **OpeningHoursData.tsx**: Retorna dados do horário de funcionamento.

---

## Observações

- As imagens podem ser otimizadas utilizando ferramentas como [Squoosh](https://squoosh.app/).
- O projeto está configurado para utilizar ESLint com as regras do Airbnb, garantindo a consistência do código.

---