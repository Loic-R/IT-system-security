FROM node:10.9

ADD ./src/ /webserver/
WORKDIR /webserver
RUN npm install && npm install -g @angular/cli && cd front && npm install && ng build
RUN apt update && apt install nmap -y

CMD [ "/bin/sh", "-c", "node index.js" ]

EXPOSE 3000


