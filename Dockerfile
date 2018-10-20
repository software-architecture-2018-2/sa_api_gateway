FROM node:carbon-slim

# Create app directory
WORKDIR /.

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY . /.
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]