<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Hebra Shop 
1. Clonar proyecto
2. ```yarn install```
3. Clonar el archivo __.env.template__ y renombralo a __.env__
4. Cambiar las variables de entorno
5. Levantar la base de datos
```
docker-composer up -d
```
6. Ejecutar SEED para inicializar base de datos con valores (GET)
```
http://localhost:3000/api/seed
```
6. Levantar: ```yarn start:dev```