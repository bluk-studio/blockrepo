# Build stage
FROM node:16-alpine as build

WORKDIR /src

COPY . .

RUN npm install
WORKDIR /src/services/users
RUN npm run build

# Runtime
FROM node:16-alpine as runtime

COPY --from=build ./src/node_modules .
COPY --from=build ./src/services/users/dist .

CMD ["node", "main.js"]