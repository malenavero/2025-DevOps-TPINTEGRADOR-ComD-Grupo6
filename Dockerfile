# 1. Imagen base oficial de Node.js
FROM node:18-slim

# 2. Directorio de trabajo
WORKDIR /usr/src/app

# 3. Copiar archivos de dependencias
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install

# 5. Copiar el resto del código
COPY . .

# 6. Exponer el puerto
EXPOSE 3000

# 7. Comando para arrancar la app
CMD [ "npm", "start" ]