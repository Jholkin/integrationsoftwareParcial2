FROM node:stretch-slim
WORKDIR /usr/src/app/microservice-pagos
COPY package.json .
RUN npm install
COPY . .
EXPOSE 6000
CMD ["npm", "start"]