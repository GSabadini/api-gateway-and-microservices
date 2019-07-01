FROM node:alpine

WORKDIR /home/gfacina/lab-api-gateway-and-microservices/node-microservice

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3003

CMD ["npm", "start"]