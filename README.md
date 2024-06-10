# Requisitos
1. Instale o docker: [Página do docker](https://www.docker.com/products/docker-desktop/);
2. Instale o plugin Docker compose;

Caso você seja usuário de Debian Gnu/Linux basta executar esse shell script: [install-docker-debian.sh](https://github.com/ArthurViniciusL/EVE/blob/main/eve-app/linux/install-docker-debian.sh).

# Executando o Back-end em Docker.
1. Acesse: [https://hub.docker.com/r/ivyson/eve-api](https://hub.docker.com/r/ivyson/eve-api).

# Executando o Front-end em Docker.
1. Entre na pasta do projeto (eve-app);
2. No terminal digite:
 > ```cd docker ```
3. Após entrar na pasta do docker digite:
> ```sudo docker compose up```
5. Acesse:
```http://localhost:3000/```
