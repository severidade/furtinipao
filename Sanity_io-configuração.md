# Configuração do Sanity.io no Projeto React

Este guia fornece o passo a passo para configurar o Sanity.io em um projeto React, garantindo uma integração eficiente e segura.

---

## Passo 1: Instalação da Dependência

Na raiz do projeto, instale o cliente Sanity executando o seguinte comando no terminal:

```bash
npm install @sanity/client
```
# Configuração do Sanity.io no Projeto React

Este guia fornece o passo a passo para configurar o Sanity.io em um projeto React, garantindo uma integração eficiente e segura.

---

## Passo 1: Instalação da Dependência

Na raiz do projeto, instale o cliente Sanity executando o seguinte comando no terminal:

```bash
npm install @sanity/client
```

Se for trabalhar com imagens dinâmicas no Sanity, instale também o pacote para manipulação de URLs de imagens:

```bash
npm install @sanity/image-url
```

---

## Passo 2: Configuração das Variáveis de Ambiente

1. Crie ou edite o arquivo `.env` na raiz do projeto.
2. Adicione as seguintes variáveis:

```plaintext
REACT_APP_SANITY_PROJECT_ID=seuProjectId
REACT_APP_SANITY_DATASET=seuDataset
REACT_APP_SANITY_API_VERSION=2025-01-01
```

- Substitua `seuProjectId` e `seuDataset` pelos valores específicos do seu projeto Sanity.
- Certifique-se de que o arquivo `.env` está listado no `.gitignore` para evitar expor informações sensíveis.

---

## Passo 3: Criação do Cliente Sanity

1. Dentro da pasta `src/`, crie um arquivo chamado `sanityClient.js`.
2. Configure o cliente Sanity no arquivo, como mostrado abaixo:

```javascript
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Validação das variáveis de ambiente
if (!process.env.REACT_APP_SANITY_PROJECT_ID || !process.env.REACT_APP_SANITY_DATASET) {
  throw new Error('As variáveis de ambiente do Sanity não foram configuradas corretamente.');
}

// Configuração do cliente Sanity
const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // ID do projeto Sanity
  dataset: process.env.REACT_APP_SANITY_DATASET, // Dataset configurado no Sanity
  useCdn: true, // Ativa o uso de CDN para maior performance
  apiVersion: process.env.REACT_APP_SANITY_API_VERSION || '2023-01-01', // Versão da API
});

// Configuração para manipulação de URLs de imagens
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client;
```

---

## Passo 4: Uso do Cliente Sanity no Projeto

1. Importe o cliente Sanity nos componentes onde deseja utilizá-lo:

```javascript
import client, { urlFor } from './sanityClient';
```

2. Exemplo de uso para buscar dados:

```javascript
import { useEffect, useState } from 'react';
import client from './sanityClient';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "post"]')
      .then((response) => setData(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item._id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
```

3. Exemplo de uso para imagens:

```javascript
<img src={urlFor(item.image).url()} alt={item.title} />
```

---

## Dicas Adicionais

- **Atualize o `apiVersion` anualmente** para usar os recursos mais recentes da API do Sanity.
- **Teste a configuração localmente** antes de fazer o deploy para garantir que todas as variáveis estão corretas.

---

Com essas etapas, o Sanity.io estará configurado no seu projeto React e pronto para uso!

Se for trabalhar com imagens dinâmicas no Sanity, instale também o pacote para manipulação de URLs de imagens:

```bash
npm install @sanity/image-url
```

---

## Passo 2: Configuração das Variáveis de Ambiente

1. Crie ou edite o arquivo `.env` na raiz do projeto.
2. Adicione as seguintes variáveis:

```plaintext
REACT_APP_SANITY_PROJECT_ID=seuProjectId
REACT_APP_SANITY_DATASET=seuDataset
REACT_APP_SANITY_API_VERSION=2025-01-01
```

- Substitua `seuProjectId` e `seuDataset` pelos valores específicos do seu projeto Sanity.
- Certifique-se de que o arquivo `.env` está listado no `.gitignore` para evitar expor informações sensíveis.

---

## Passo 3: Criação do Cliente Sanity

1. Dentro da pasta `src/`, crie um arquivo chamado `sanityClient.js`.
2. Configure o cliente Sanity no arquivo, como mostrado abaixo:

```javascript
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Validação das variáveis de ambiente
if (!process.env.REACT_APP_SANITY_PROJECT_ID || !process.env.REACT_APP_SANITY_DATASET) {
  throw new Error('As variáveis de ambiente do Sanity não foram configuradas corretamente.');
}

// Configuração do cliente Sanity
const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // ID do projeto Sanity
  dataset: process.env.REACT_APP_SANITY_DATASET, // Dataset configurado no Sanity
  useCdn: true, // Ativa o uso de CDN para maior performance
  apiVersion: process.env.REACT_APP_SANITY_API_VERSION || '2023-01-01', // Versão da API
});

// Configuração para manipulação de URLs de imagens
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client;
```

---

## Passo 4: Uso do Cliente Sanity no Projeto

1. Importe o cliente Sanity nos componentes onde deseja utilizá-lo:

```javascript
import client, { urlFor } from './sanityClient';
```

2. Exemplo de uso para buscar dados:

```javascript
import { useEffect, useState } from 'react';
import client from './sanityClient';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "post"]')
      .then((response) => setData(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item._id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
```

3. Exemplo de uso para imagens:

```javascript
<img src={urlFor(item.image).url()} alt={item.title} />
```

---

## Dicas Adicionais

- **Atualize o `apiVersion` anualmente** para usar os recursos mais recentes da API do Sanity.
- **Teste a configuração localmente** antes de fazer o deploy para garantir que todas as variáveis estão corretas.

---

Com essas etapas, o Sanity.io estará configurado no seu projeto React e pronto para uso!
