# Exploit CVE-2019-7139

## Requirements
- Docker
- Docker-compose
- Python 3

If you've just installed docker, don't forget to run the docker daemon using the command `dockerd`. 

## Run the environment
```bash
git clone https://github.com/Loic-R/IT-system-security.git
cd flaw_2
docker-compose up -d
#To follow the logs
docker-compose logs -f
```
It takes a little bit of time to start everything, so go prepare a coffee :coffee: and come back in 2 minutes! 

When it is successfully started, it should display a log like this one:
```
########################################################################
magento_1  | magento INFO   Installation parameters for magento:
magento_1  | magento INFO     Username: admin
magento_1  | magento INFO     Site URL: http://127.0.0.1/
magento_1  | magento INFO     Admin URL: http://127.0.0.1/admin
magento_1  | magento INFO   This installation requires no credentials.
magento_1  | magento INFO  ########################################################################
```

## Exploit
To exploit the flaw, just run the python script and see :
```bash
python exploit.py http://127.0.0.1
```

## Teardown
```bash
#ctrl+c or in another terminal
docker-compose stop
docker-compose rm
docker volume rm flaw_2_magento_data flaw_2_mariadb_data
```