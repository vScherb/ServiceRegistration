FROM node:boron
WORKDIR /usr/src/registrationservice

COPY package.json /usr/src/registrationservice
COPY package-lock.json /usr/src/registrationservice
RUN npm install

COPY ./src/ /usr/src/registrationservice
EXPOSE 80

CMD [ "node", "./src/main.js" ]
