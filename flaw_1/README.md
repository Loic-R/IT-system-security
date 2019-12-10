# Exploit CVE-2018-16461

## Requirements
- Docker

If you've just installed docker, don't forget to run the docker daemon. 

## Set up the docker environment
```bash
# Build the container
sudo docker build -t ctnFlaw

# Launch the container
sudo docker run -d --name ctnFlaw flaw

# Connect to the docker
sudo docker exec -t -i ctnFlaw /bin/bash
```
