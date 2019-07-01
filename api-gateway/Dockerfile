FROM node:alpine

WORKDIR /home/gfacina/lab-api-gateway-and-microservices/api-gateway

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]