# Estudo Dirigido: Desenvolvimento de API RESTful

## **Construindo uma API com Express e MongoDB**

1. **Implementar a rota de cadastro de usuários (`/register`):**

- Deve aceitar um objeto JSON com `username` e `password`.
- Deve retornar um status 201 se o usuário for registrado com sucesso. - Deve retornar um status 400 se houver erro na requisição (por exemplo, campos faltando ou dados inválidos).

1. **Implementar a rota de autenticação (`/authenticate`):**

- Deve aceitar um objeto JSON com `username` e `password`.
- Deve retornar um token JWT se a autenticação for bem-sucedida.
- Deve retornar um status 401 se as credenciais forem inválidas.

1. **Implementar a rota de listagem de usuários (`/users`):**

- Deve retornar uma lista de usuários.
- Deve exigir um token JWT válido para acessar esta rota.
- Deve retornar um status 401 se o token estiver ausente ou inválido.

1. **Criar uma instância no Atlas para que seja possível realizar as ações de
   persistência do banco de dados.**

**Informações importantes:**

- Realizar a modularização em camadas para construção das rotas
- Camadas: Controller, Service e Model
- Criar arquivo de rotas
- Configurar o arquivo app.js para subir o servidor e conectar-se ao banco
- Configurar adequadamente o arquivo package.json, permitindo a execução por meio do comando: npm start
- Utilize o Mongoose como ODM para realizar a conexão com o banco e a criação dos schemas.
