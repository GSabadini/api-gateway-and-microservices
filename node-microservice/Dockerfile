FROM node:alpine

WORKDIR /node-microservice

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3003

CMD ["npm", "start"]