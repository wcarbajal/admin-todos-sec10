
# Development

Pasos para levatar la app en desarrollo

1. Levantar la base de datos

    ``` docker compose up -d ```

2. Renombrar el .env.template a .env

3. Reemplazar las variables de entorno

4. Ejecutar el comenado ``` npm install ```

5. Ejecutar el comenado ``` npm run dev ```

6. Ejecutar los comandos de primas -

    ``` npx prisma migrate dev ```<br>
    ``` npx prisma generate ```

7. Ejecutar el SEED para [crear la base de datos  local](localhost:3000/api/seed)

# Prisma commands

1. Ejecutar los siguientes comandos:

    ``` npx prisma init ```<br>
    ``` npx prima migrate dev ```<br>
    ``` npx prisma generate ```<br>

2. Renombrar el .env.template

# Stage
