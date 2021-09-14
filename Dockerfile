FROM node

WORKDIR /App

COPY . .

ENV PORT=5000

RUN npm ci

CMD [ "npm start" ]