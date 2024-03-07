# Mobile Store Management

Este projeto consiste em uma aplicação web de gerenciamento de uma loja de celulares, oferecendo funcionalidades abrangentes para facilitar a administração de produtos, usuários e operações essenciais. O sistema visa atender aos requisitos modernos de uma experiência de gerenciamento eficiente e prático.

## Stacks

- Typescript
- Javascript
- React
- Next.js
- Tailwind CSS
- Tailwind Styled Components
- Node
- Express
- Axios
- Joi
- JWT
- BCrypt
- Sequelize
- Postgres
- Vercel
- VSCode
- Git & Github

## Funcionalidades Principais:

Autenticação de Usuários: Possibilidade de registro e login para usuários, garantindo a segurança.
Gestão de Produtos: Cadastro, edição, exclusão e visualização detalhada de produtos, abrangendo desde informações básicas até detalhes avançados.

## Rodando Localmente

Clone o projeto:

```bash
  git clone git@github.com:MattBastos/mobile-store-management.git
```

Entre no diretório do projeto:

```bash
  cd mobile-store-management
```

Instale as dependências:

```bash
  npm install
```

Inicie o projeto:

Frontend:

```bash
  npm run dev
```

Backend:

```bash
  npm run server
```

## Api

A API oferece endpoints para login, registro de usuário e manipulação de informações sobre produtos.

URL Base:

```
  http://localhost:3001
```

### Login

**Endpoint:** /login

**Método:** POST

**Descrição:** Realiza o login do usuário, caso já possua registro no banco de dados.

**Exemplo dos campos a serem preenchidos no endpoint de solicitação de login:**

```json
{
  "email": "email@email.com",
  "senha": "123456"
}
```

**Obs:** O email deve ser válido e a senha deve ter no mínimo 6 caracteres.

### Registro

**Endpoint:** /register

**Método:** POST

**Descrição:** Registra um novo usuário no banco de dados.

**Exemplo dos campos a serem preenchidos no endpoint de solicitação de registro:**

```json
{
  "name": "example"
  "email": "email@email.com",
  "senha": "123456"
}
```

**Obs:** O nome deve ter no mínimo 5 caracteres, o email deve ser válido e a senha deve ter no mínimo 6 caracteres.

## Os métodos de login e registro retornam o token do usuário, que deve ser utilizado na autenticação das requisições de produtos.

### Buscar Detalhes do Produto

**Endpoint:** /products/:id

**Autenticação:** Necessária

**Método:** GET

**Descrição:** Recebe informações sobre um determinado produto.

**Exemplo de um produto recebido na solicitação:**

```json
{
  "id": 4,
  "name": "Xiaomi Redmi Note 8",
  "brand": "Xiaomi",
  "model": "Redmi Note 8",
  "price": "630",
  "color": "Branco",
  "createdAt": "2024-03-03T20:09:13.012Z",
  "updatedAt": "2024-03-07T03:17:33.174Z"
}
```

### Buscar Todos os Produtos

**Endpoint:** /products

**Autenticação:** Necessária

**Método:** GET

**Descrição:** Recebe informações de todos os produtos registrados no banco de dados.

**Exemplo de produtos recebidos na solicitação:**

```json
[
  {
    "id": 27,
    "name": "Samsung Galaxy 19",
    "brand": "Samsung",
    "model": "Galaxy 19",
    "price": "1000",
    "color": "Preto",
    "createdAt": "2024-03-06T23:54:20.063Z",
    "updatedAt": "2024-03-06T23:54:20.063Z"
  },
  {
    "id": 29,
    "name": "Xiaomi Redmi 9",
    "brand": "Xiaomi",
    "model": "Redmi 9",
    "price": "1000",
    "color": "Vermelho",
    "createdAt": "2024-03-06T23:55:54.851Z",
    "updatedAt": "2024-03-06T23:55:54.851Z"
  }
]
```

### Registrar Produto Simples

**Endpoint:** /simpleProduct

**Autenticação:** Necessária

**Método:** POST

**Descrição:** Registra um produto simples no banco de dados.

**Exemplo dos campos a serem preenchidos no endpoint da solicitação:**

```json
{
  "name": "Xiaomi Redmi 9",
  "brand": "Xiaomi",
  "model": "Redmi 9",
  "price": 10000,
  "color": "Branco"
}
```

### Registrar Produto Detalhado

**Endpoint:** /detailedProduct

**Autenticação:** Necessária

**Método:** POST

**Descrição:** Registra um produto com detalhes adicionais no banco de dados.

**Exemplo dos campos a serem preenchidos no endpoint da solicitação:**

```json
{
  "name": "Xiaomi Redmi 9",
  "details": {
    "brand": "Xiaomi",
    "model": "Redmi 9",
    "color": "Preto"
  },
  "price": 10000,
}
```

### Registrar Vários Produtos

**Endpoint:** /manyProducts

**Autenticação:** Necessária

**Método:** POST

**Descrição:** Registra vários produtos de uma vez no banco de dados.

**Exemplo dos campos a serem preenchidos no endpoint da solicitação:**

```json
[
  {
    "name": "Xiaomi Redmi 9",
    "brand": "Xiaomi",
    "model": "Redmi 9",
    "data": [
      {
        "price": 10000,
        "color": "Azul"
      },
      {
        "price": 10000,
        "color": "Verde"
      }
    ]
  },
  {
    "name": "Iphone 14 Pro",
    "brand": "Iphone",
    "model": "14 Pro",
    "data": [
      {
        "price": 30000,
        "color": "Prata"
      },
      {
        "price": 30100,
        "color": "Dourado"
      }
    ]
  }
]
```

### Editar Produto

**Endpoint:** /products/:id

**Autenticação:** Necessária

**Método:** PUT

**Descrição:** Edita um determinado produto a partir do id fornecido.

**Exemplo dos campos a serem preenchidos no endpoint da solicitação:**

```json
{
  "name": "Xiaomi Redmi 9",
  "brand": "Xiaomi",
  "model": "Redmi 9",
  "price": 10000,
  "color": "Branco"
}
```

### Deletar Produto

**Endpoint:** /products/:id

**Autenticação:** Necessária

**Método:** DELETE

**Descrição:** Deleta um determinado produto a partir do id fornecido.

## Author

- [@MattBastos](https://www.github.com/MattBastos)
- [Linkedin](https://www.linkedin.com/matthewsbastos)
