FROM node:carbon-slim

# Create app directory
WORKDIR /gateway

# Install app dependencies
COPY package.json /gateway
RUN npm install

# Bundle app source
COPY . /gateway
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]