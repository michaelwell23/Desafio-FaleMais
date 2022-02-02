<h1 align="center">
  <img alt="logo" title="logo" src="./.github/logo.png" width="400px" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/michaelwell23/Haitatsu?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/michaelwell23/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/michaelwell23/?style=social">
  </a>
</p>

<p align="center">
  <a href="#como-instalar">Como instalar?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#documentação-das-rotas">Documentação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

Backend do app Haitatsu, desenvolvido com  Node e [Express](https://github.com/expressjs/express), nos padrões REST API.

---

### Ferramentas utilizadas na aplicação:

- [Sequelize](https://github.com/sequelize/sequelize) - ORM para conversação com o banco de dados
- [Yup](https://github.com/jquense/yup) - _Schema validator_(Validação de dadsos de entrada)
- [JWT](https://www.npmjs.com/package/jsonwebtoken) - JSON WEB TOKEN - Lib para autenticação via token.
- [Bcryptjs](https://www.npmjs.com/package/bcrypt) - Usado na criptografia de senhas.
- [DotEnv](https://github.com/motdotla/dotenv) - Para lidar com variáveis ambiente.
- [Nodemailer](https://github.com/nodemailer/nodemailer) - Lib para envio de emails com Node.js.
- [Handlebars](https://handlebarsjs.com/) - Template Engine para criar template dos emails.
- [Bee-Queue](https://github.com/bee-queue/bee-queue) - Para lidar com filas em background.(Ex: envio de emails)
- [Date-fns](https://github.com/date-fns/date-fns) - Manipulação de datas no JavaScript.
- [Sentry](https://sentry.io/) - Para tratamento de exceções e controle de erros em produção.
- [Youch](https://github.com/poppinss/youch) - Tratamento de exceções no desenvolvimento.
- Design Patterns e Conceitos Avançados em NodeJS.
- Seguranças no Node.

### Bancos de dados da aplicacão
- Postgres
- MongoDB
- Redis

### Ferramentas utilizadas no ambiente de desenvolvimento:
- [Sucrase](https://sucrase.io/) - Para utilizar o ES6 (ECMAScript 6)
- [ESLint](https://github.com/eslint/eslint) - Lint para identificar erros em tempo de desenvolvimento.
- [Prettier](https://github.com/prettier/prettier) - Padroniza e melhora a visualização do código.

### Ferramentas extras que ajudaram no desenvolvimento:
- [Docker](https://www.docker.com/) - Usado para conteineização dos bancos de dados.
- [Insomnia](https://insomnia.rest/) - Utilizado para debugar e testar as rotas da API.
- [MailTrap](https://mailtrap.io/) - Serviço de envios de email fake para testes e desenvolvimento.
- [Postbird](https://www.electronjs.org/apps/postbird) - Utilizado para vizualizar e manipular bancos de dados Postgres.
- [DevDocs](https://devdocs.egoist.moe/) - App Desktop para consultar documentação.
---

## Como instalar?

Antes de tudo, instale o [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/) e o [Node.js](https://nodejs.org/en/download/). Recomendo que troque o link local host pelo IP da sua máquina seguido da porta que será utilizada, exemplo: ```http://192.168.0.62:3333```. Isso para que não haja problemas para rodar a aplica mobile android, que não reconhece porta com localhost.


1. Instale o [Docker](https://www.docker.com/).

2. Inicie as imagens dos bancos de dados:
```
# Digite o nome sem aspas.
```
```
$ docker run --name "nome" -p 6379:6379 -d -t redis:alpine
```
```
$ docker run --name "nome" -p 27017:27017 -d -t mongo
```
```
$ docker run --name "nome" -p 5432:5432 -d -t postgres
```
```
# Para ver se os está funcionando
$ docker ps

# Para iniciar algum processo do Docker
$ docker start "nome"
```
3. Clone o repositório e entre na pasta ```server```:
```
$ git clone https://github.com/michaelwell23/projeto-sistema-de-agendamentos
```
```
$ cd projeto-sistema-de-agendamentos/server
```
4. Instale as dependências com:
```
$ yarn install
```
5. Configure as váriaveis ambiente criando um arquivo ```.env```, seguindo o modelo do arquivo ```.env.example```
6. Rode as `migrations` com o comando:
```
$ yarn sequelize db:migrate
```
7. Rode as `seeds` com o comando:
```
$ yarn sequelize db:seed:all
```
8. Inicie o processo principal da aplicação:
```
$ yarn dev
```
9. Inicie o processo que gerencia as filas em _background_:
```
$ yarn queue
```

10. Para o testar o envio de email use o [MailTrap](https://mailtrap.io/)

11. Para tratamento de exceções, use o [Sentry](https://sentry.io/)

---
## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/michaelwell23/Haitatsu/blob/master/LICENSE) para mais detalhes.

---


Feito com :purple_heart: by [Michael W.Lopes](https://github.com/michael23-lopes)

[![Linkedin Badge](https://img.shields.io/badge/-Michael%20Lopes-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/michael-wellington-lopes/)](https://www.linkedin.com/in/michael-wellington-lopes/)
[![Gmail Badge](https://img.shields.io/badge/-michael23.wellington@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:michael23.wellington@gmail.com)](mailto:michael23.wellington@gmail.com)
