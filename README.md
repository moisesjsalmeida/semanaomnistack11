# 11ª semana Omnistack

![](/frontend/src/assets/logo.svg)

Desenvolvimento do projeto **Be The Hero**, com back-end, front-end e mobile, com stack Javascript, promovida pela Rocketseat.

A ideia do projeto é a construção de uma aplicação que permite que ONGs cadastrem casos que necessitam de ajuda, e que voluntários possam se conectar a elas através de e-mail e WhatsApp para ajudar.

---

## Stack utilizada

### Back-end

- **NodeJs** para a base da aplicação:
    - *Express* → Para gerenciamento de requisições, rotas e URL
    - *Nodemon* → criação de servidor de desenvolvimento com Live Reload
    - *Knex →* Gerenciamento de banco de dados
    - *Cors* → Comunicação entre back-end e front-end web e mobile
- **SQLite** banco de dados

### Front-end

- **React** para a construção de uma interface de usuário utilizando os conceitos de *SPA (Single Page Application).* A partir do React, utilizamos diversos pacotes, como o *react-icons*, *react-dom*, *react-router-dom* e outros.
- *Axios* → cliente HTTP

### Mobile

- **React Native** para criação de uma interface nativa para dispositivos Android e iOS. Traz simplicidade na criação do código e na integração com o back-end.
- **Expo** fornece ferramentas e serviços para acessarmos recursos do dispositivo mobile, gerando a aplicação mobile através do código em JavaScript e React.
- Exploração do recurso de deep-linking

### Outras tecnologias

- Validação de dados:
    - **Celebrate** em conjunto com o  **Joi**
- Implantação de testes:
    - **Jest** para testes unitários e de integração
    - **Supertest** para testes com HTTP
    - **Cross-env** para utilizar variáveis de ambiente
- **Git** para versionamento e **Github** para publicação
