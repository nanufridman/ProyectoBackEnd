# Ejecucion de mi proyecto 

Para ejecutarlo, copiar el archivo .env.example y quitar el .example
```
cp .env.example .env
```
*Cambiar DATABASE_URL* 
```
DATABASE_URL = 'mongodb+srv://exitroom:exitroom2022@cluster0.gqrnwjs.mongodb.net/exitroom'
```

*Instalar dependencias* 
```
npm install
```

*Ejecutar servidor en modo desarrollo - nodemon* 
```
npm run dev 
```

*Ejecutar servidor en modo production - node* 
```
npm run start 
```
