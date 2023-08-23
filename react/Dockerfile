#Build
FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn run build

#Deploy
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
expose 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
