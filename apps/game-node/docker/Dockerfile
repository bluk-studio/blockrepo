FROM alpine
WORKDIR /home

RUN apk add --no-cache nodejs npm openjdk17-jre-headless

COPY ../proxy.key .
COPY ../dist .
COPY ../package.json .
COPY ../package-lock.json .

RUN npm ci

CMD ["node", "main.js"]