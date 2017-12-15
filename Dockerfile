FROM node:9.2.1-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app