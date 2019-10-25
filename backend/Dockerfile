FROM node:10.16

WORKDIR /home/node/app

COPY package.json package.json
COPY jest-config.js jest-config.js
COPY tsconfig.json tsconfig.json

RUN npm i
RUN npm i -D jest

EXPOSE 4000
