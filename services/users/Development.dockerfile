# Build stage
# FROM node:16-alpine as build
FROM node:16-alpine

WORKDIR /src

COPY . .

RUN npm install
WORKDIR /src/services/users

EXPOSE 5000

CMD ["npm", "run", "start:dev"]