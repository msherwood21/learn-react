FROM node:17.2

ENV DEBUG=express:*

WORKDIR /opt/project
COPY ./package.json .
RUN npm install

COPY ./src src

EXPOSE 3000
CMD npm run start