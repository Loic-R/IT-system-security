FROM node:8.16

ADD ./src/ /webserver/
WORKDIR /webserver
RUN npm install package.json

CMD [ "/bin/sh", "-c", "node index.js" ]
