FROM node:22.14.0

WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 5173

COPY . .

CMD ["npm", "run", "dev"]
