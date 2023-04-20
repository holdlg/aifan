# docker 运行 minio

```bash
sudo docker run \
  -d \
  --name minio \
  -p 9000:9000 \
  -p 9001:9001 \
  -e "MINIO_ROOT_USER=minioroot" \
  -e "MINIO_ROOT_PASSWORD=minioroot" \
  -v /minio/data:/data \
  -v /minio/config:/root/.minio \
  minio/minio:latest server /data --console-address ":9001"
```

## minio

```bash
sudo docker run \
  -d \
  --name minio \
  -p 9000:9000 \
  -p 9001:9001 \
  -e "MINIO_ROOT_USER=minioroot" \
  -e "MINIO_ROOT_PASSWORD=minioroot" \
  -v /minio/data:/data \
  -v /minio/config:/root/.minio \
  minio/minio:RELEASE.2023-04-13T03-08-07Z.fips server /data --console-address ":9001"
```

## bitnami/minio

```
docker run --name minio \
    --user root
    --publish 9000:9000 \
    --publish 9001:9001 \
    --volume /minio/data:/data \
    bitnami/minio:2023.4.13
```
