# Common

### Установить Node.js

[Latest LTS Version: 14.17.5 (includes npm 6.14.14)](https://nodejs.org/en/download/)

### Установить Git

[Git](https://git-scm.com/downloads)

### Установить Yarn

```bash
npm install --global yarn
```

### Установить Http Server

```bash
npm install --global http-server
```

# SSR

### Открыть консоль в папке с приложением

Например
```bash
cd  ~/Desktop/diploma-ssr 
```

### Установить зависисмости
```bash
yarn
```

### Автоматически избавиться от потенциальных проблем с кодом
```bash
npm run eslint:fix
```

### Добавить плагин eslint
```bash
yarn add --dev eslint-config-next
```

### Собрать приложение
```bash
npm run build
```

### Запускаем сервер

```bash
npm start
```

### В консоле появится ссылка по которой доступно приложение

Например: `http://localhost:3000`


## Heroku
Install the Heroku CLI
Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

```bash
heroku login
```
Clone the repository
Use Git to clone diploma-react-spa's source code to your local machine.

```bash
heroku git:clone -a diploma-react-ssr
cd diploma-react-ssr
```
Deploy your changes
Make some changes to the code you just cloned and deploy them to Heroku using Git.

```bash
git add .
git commit -am "make it better"
git push heroku master
```