FROM node:14

# Create app directory
WORKDIR usr/src/app

# Install dependencies
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

CMD ["node","app.js"]