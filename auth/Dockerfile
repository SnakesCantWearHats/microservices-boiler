FROM node:10.16

# WORKDIR /home/node/app
COPY package.json package.json

RUN npm install
RUN npm -g install nodemon
# RUN npm rebuild bcrypt --build-from-source
RUN npm i -D jest

EXPOSE 4000
