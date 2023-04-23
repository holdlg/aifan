# [Docker] run code-server

code-server

```bash
 docker run -it --name wc-python-374  -p 8080:8080 -p 5000:5000 -v "/root/wc_project/python:/root/project" -e "PASSWORD=tttttt" -d  holdlg/code-server-python:3.7.4 --auth="password"
```

mm-wiki

```bash
docker run --name mmwiki -p 8090:8090 -p 8080:8080 -v /opt/mmwiki:/opt/mmwiki -it ubuntu:18.04 /bin/bash 
```
