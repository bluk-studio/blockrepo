# Build stage
FROM node:16-alpine as build

WORKDIR /src

COPY . .

RUN cd services/users
RUN ls
RUN npm ci
RUN npm run build
RUN ls

# Runtime
FROM node:16-alpine as runtime

COPY --from=build ./node_modules .
COPY --from=build ./dist .

CMD ["node", "main.js"]