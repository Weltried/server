FROM node:16

WORKDIR /usr/src/app/weltried_mainserver

COPY package*.json ./

RUN npm install
RUN echo "Asia/Seoul" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

COPY . .

EXPOSE 80
CMD [ "node", "main.js" ]
