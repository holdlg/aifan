# gitea

## docker-componse

postgres

```yaml
version: '3'

networks:
  gitea:
    external: false

volumes:
  gitea:
    driver: local

services:
  server:
    image: gitea/gitea:1.17.2
    container_name: gitea
    environment:
      - USER_UID=1000
      - USER_GID=1000
      - GITEA__database__DB_TYPE=postgres
      - GITEA__database__HOST=db:5432
      - GITEA__database__NAME=gitea
      - GITEA__database__USER=gitea
      - GITEA__database__PASSWD=gitea
    restart: always
    networks:
      - gitea
    volumes:
      - gitea:/data
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      - '80:3000'
      - '222:22'
    depends_on:
      - db

  db:
    image: postgres:14
    restart: always
    environment:
      - POSTGRES_USER=gitea
      - POSTGRES_PASSWORD=gitea
      - POSTGRES_DB=gitea
    networks:
      - gitea
    volumes:
      - ./postgres:/var/lib/postgresql/data
```

## docker-componse 外部数据库

postgres

若使用 git 协议免密码克隆，如：git clone git@ip:name/repo.git

建议修改宿主机的 ssh 端口为非标准端口，gitea 容器映射端口为标准端口 22

```yml
version: '3'

networks:
  gitea:
    external: false

services:
  server:
    image: gitea/gitea:1.18.3
    container_name: gitea
    environment:
      - USER_UID=1000
      - USER_GID=1000
      - GITEA__database__DB_TYPE=postgres
      - GITEA__database__HOST=10.10.135.277:5432
      - GITEA__database__NAME=gitea
      - GITEA__database__USER=postgres
      - GITEA__database__PASSWD=postgres
    restart: always
    networks:
      - gitea
    volumes:
      - ./gitea:/data
      - /etc/timezone:/etc/timezone:zh
      - /etc/localtime:/etc/localtime:zh
    ports:
      - '80:3000'
      - '22:22'
```
