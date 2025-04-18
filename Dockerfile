# Этап сборки
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Этап продакшена
FROM nginx:alpine

# Удалим дефолтный конфиг Nginx и добавим свой
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем сборку Vite в nginx html директорию
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
