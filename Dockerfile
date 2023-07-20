FROM nginx:alpine

RUN npm i

RUN npm run build

COPY /build /usr/share/nginx/html

COPY /default.conf /etc/nginx/conf.d

EXPOSE 8080