# Use a imagem base oficial do Node.js
FROM node:18

# Defina o diretório de trabalho no container
WORKDIR ./app

# Copie os arquivos package.json e package-lock.json
COPY ../package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY .. .

# Exponha a porta em que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
