# Exploit CVE-2018-16461

## Requirements
- Docker

If you've just installed docker, don't forget to run the docker daemon using the command `dockerd`. 

## Build the docker
```bash
git clone https://github.com/Loic-R/IT-system-security.git
cd flaw_1
docker build -t flaw .
```

## Run the container
```bash
docker run -p 3000:3000 --name ctnFlaw flaw
```

## Use the environement
Connect to `localhost:3000` on the webbrowser of your choice
