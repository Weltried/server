FROM node:16

WORKDIR /usr/src/app/weltried_mainserver

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80
CMD [ "node", "main.js" ]
