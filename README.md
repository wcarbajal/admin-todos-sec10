# Development
Pasos para levatar la app en desarrollo

1. Levantar la base de datos
````
docker compose up -d
````

2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comenado ``` npm install ```
5. Ejecutar el comenado ``` npm run dev ```
6. Ejecutar los comandos de primas
     ```
    npx prisma migrate dev
    npx prisma generate
     ```

6. Ejecutar el SEED para [crear la base de datos  local](localhost:3000/api/seed)


# Prisma commands
````
npx prisma init
npx prima migrate dev
npx prisma generate
````
2. Renombrar el .env.template



# Development

# Stage


