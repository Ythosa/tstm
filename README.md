<div align="center">

<h1> TSTM </h1>
  
[![Badge](https://img.shields.io/badge/Uses-NestJS-red.svg?style=flat&logo=nestjs&logoWidth=15&logoColor=orange)](https://https://nestjs.com/)
[![Badge](https://img.shields.io/badge/Made_with-Affection-ff69b4.svg?style=flat&logo=ko-fi&logoWidth=15&logoColor=ff69b4)](https://i.pinimg.com/736x/d7/5f/e3/d75fe32e7af10c3ed0bafb98816a6ce2.jpg)
[![Badge](https://img.shields.io/badge/Open-Source-green.svg?style=flat&logo=open-source-initiative&logoWidth=15&logoColor=green)](https://ru.wikipedia.org/wiki/Open_source)

</div>


## Description

TSTM is simple & useful task manager application.

## Available scripts

```bash
# start application in development mode
$ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build

# build application
$ docker-compose build

# run application
$ docker-compose up

# run and build? application
$ docker-compose up --build
```
  
```bash
# see api service logs
$ docker logs tstm_api

# see api database logs
$ docker logs tstm_db 
```
  
```bash
# remove api container
$ docker-compose rm api

# remove auth db container (to clear database)
$ docker-compose rm db
```

```bash
# get all volumes
$ docker volume ls 

# get all images
$ docker images

# get all working processes
$ docker ps
```


## Support

TSTM is an GPL-3.0 - licensed open source project. It can grow thanks to the sponsors and support by the amazing backers.

## Stay in touch

- Author - [Babin Ruslan](https://ythosa.github.io)

## License

- TSTM is [GPL-3.0 licensed](LICENSE).
