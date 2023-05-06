# drone config

## drone-ssh
```yml
kind: pipeline
type: docker
name: xmu-api

steps:
  - name: xmu-api-build
    image: yj5b/xmu-api:1.0
    environment:
      GO111MODULE: on
      GOPROXY: https://goproxy.cn,direct
    commands:
      - docker build -t yj5b/xmu-api:1.0 ./

  - name: xmu-api-scp
    image: appleboy/drone-scp
    settings:
      host: 10.0.35.109
      username: root
      password: tech
      port: 22
      command_timeout: 10m
      target: /root/xmu/
      source: ./xmu-api

  - name: xmu-api-ssh
    image: appleboy/drone-ssh
    settings:
      host: 10.0.35.109
      username: root
      password: tech
      port: 22
      command_timeout: 2m
      script:
        - cd /root/xmu/
        - kill -9 $(lsof -i:8080 -t)
        - chmod +x xmu-api
        - nohup ./xmu-api &
        - echo "xmu-api deploy ok"
        - exit

```