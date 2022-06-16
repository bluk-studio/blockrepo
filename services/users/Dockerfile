# Build stage
# FROM node:16-alpine as build
FROM node:16-alpine

WORKDIR /src

COPY . .

RUN npm install
WORKDIR /src/services/users

EXPOSE 5000

CMD ["npm", "run", "start:dev"]

# Runtime
# FROM node:16-alpine as runtime

# COPY --from=build ./src/node_modules .
# COPY --from=build ./src/services/users/dist .

# EXPOSE 5000

# CMD ["node", "main.js"]