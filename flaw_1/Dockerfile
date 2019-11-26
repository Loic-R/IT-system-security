FROM node:8.16

# 4.15 is the last version where the exploit is present

ADD ./src/ /webserver/
RUN npm install libnmap@0.4.15
WORKDIR /webserver

CMD [ "/bin/sh", "-c", "node index.js" ]
