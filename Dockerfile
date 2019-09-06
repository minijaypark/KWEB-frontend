FROM node:12.7-alpine
WORKDIR /app
COPY . /app
RUN npm ci
RUN npm run build

FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/dist /usr/share/nginx/html
