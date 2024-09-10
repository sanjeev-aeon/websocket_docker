FROM node:20-alpine3.20

RUN mkdir -p /app/docker_websocket
COPY . ./app/docker_websocket 
WORKDIR /app/docker_websocket 
RUN npm install
EXPOSE 8123
RUN pwd

CMD node server.js
