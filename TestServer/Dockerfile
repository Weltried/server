FROM node:16

# Create App directory
WORKDIR /usr/src/app/test_server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where availabe (npm@5+)
COPY package*.json ./

#RUN npm install
# if you are building your code for production
RUN npm ci --only=productionn

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "testserver.js" ]
