# [Docker] 运行go-fastdfs

```bash
# 下载镜像
docker pull sjqzhang/go-fastdfs

docker run --name fastdfs -v /data/fastdfs_data:/data -p 80:8080 -e GO_FASTDFS_DIR=/data -d sjqzhang/go-fastdfs
```
