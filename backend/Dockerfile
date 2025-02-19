FROM node:22.14.0

RUN npm install -g nodemon

WORKDIR /app

COPY . .


RUN npm install

EXPOSE 5050

CMD ["npm","start"]