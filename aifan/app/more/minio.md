# docker运行minio

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