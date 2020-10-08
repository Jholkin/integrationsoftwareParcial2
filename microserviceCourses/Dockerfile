FROM node:stretch-slim
WORKDIR /usr/src/app/microservice-courses
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "start"]