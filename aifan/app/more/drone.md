# drone

```sh
docker run \
  --volume=/var/lib/drone:/data \
  --env=DRONE_GITEA_SERVER=http://10.0.35.88 \
  --env=DRONE_GITEA_CLIENT_ID=5dbb2b29-c565-4207-943e-2f79b0fd1047 \
  --env=DRONE_GITEA_CLIENT_SECRET=gto_ykdremhhhn65222qbunrayfcnqhdtsdozl3hh4bsgwkmmw6dqdsa \
  --env=DRONE_RPC_SECRET=c39f8862a6b2c461b2da6a4dc3db61c6 \
  --env=DRONE_SERVER_HOST=10.0.35.87 \
  --env=DRONE_SERVER_PROTO=http \
  --publish=80:80 \
  --publish=443:443 \
  --restart=always \
  --detach=true \
  --name=drone \
  drone/drone:2.16
```

```sh
docker run --detach \
  --volume=/var/run/docker.sock:/var/run/docker.sock \
  --env=DRONE_RPC_PROTO=http \
  --env=DRONE_RPC_HOST=10.0.35.87 \
  --env=DRONE_RPC_SECRET=c39f8862a6b2c461b2da6a4dc3db61c6 \
  --env=DRONE_RUNNER_CAPACITY=2 \
  --env=DRONE_RUNNER_NAME=drone-runner \
  --publish=3000:3000 \
  --restart=always \
  --name=runner \
  drone/drone-runner-docker:1.8
```

# ubuntu 22

```sh
sudo docker run \
  --volume=/var/lib/drone:/data \
  --env=DRONE_GITEA_SERVER=http://10.0.35.88 \
  --env=DRONE_GITEA_CLIENT_ID=5dbb2b29-c565-4207-943e-2f79b0fd1047 \
  --env=DRONE_GITEA_CLIENT_SECRET=gto_ykdremhhhn65222qbunrayfcnqhdtsdozl3hh4bsgwkmmw6dqdsa \
  --env=DRONE_RPC_SECRET=c39f8862a6b2c461b2da6a4dc3db61c6 \
  --env=DRONE_SERVER_HOST=10.0.35.87 \
  --env=DRONE_SERVER_PROTO=http \
  --publish=80:80 \
  --publish=443:443 \
  --restart=always \
  --detach=true \
  --name=drone \
  drone/drone
```

```sh
sudo docker run --detach \
  --volume=/var/run/docker.sock:/var/run/docker.sock \
  --volume=/etc/docker/daemon.json:/etc/docker/daemon.json \
  --env=DRONE_RPC_PROTO=http \
  --env=DRONE_RPC_HOST=10.0.35.87 \
  --env=DRONE_RPC_SECRET=c39f8862a6b2c461b2da6a4dc3db61c6 \
  --env=DRONE_RUNNER_CAPACITY=2 \
  --env=DRONE_RUNNER_NAME=drone-runner \
  --publish=3000:3000 \
  --restart=always \
  --name=runner \
  drone/drone-runner-docker
```