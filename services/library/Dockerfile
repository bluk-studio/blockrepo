# Build stage
FROM node:16-alpine as build

COPY package.json .
COPY package-lock.json .

RUN npm ci
RUN npm run build

# Runtime
FROM node:16-alpine as runtime

COPY --from=build ./node_modules .
COPY --from=build ./dist .

CMD ["node", "main.js"]