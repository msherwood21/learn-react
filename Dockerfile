FROM node:17.2

WORKDIR /opt/project
COPY ./package.json .
RUN npm install

COPY ./public public
COPY ./src src

EXPOSE 3000
CMD npm run start