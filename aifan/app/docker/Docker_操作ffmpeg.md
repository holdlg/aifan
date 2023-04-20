
# [Docker] 操作ffmpeg

## 命令

```
apt-get install -y ffmpeg

apt-get install -y xvfb

ffmpeg -f x11grab -video_size cif -framerate 25 -i :0.0 /tmp/out.mpg
ffmpeg -f x11grab -video_size 1024x768 -framerate 25 -i :0.0 /tmp/out.mpg


 docker run -v $PWD:/tmp jrottenberg/ffmpeg:4.0-ubuntu \
        -stats \
        -i http://www.jell.yfish.us/media/jellyfish-20-mbps-hd-hevc-10bit.mkv \
        -c:v libx265 -pix_fmt yuv420p10 \
        -t 5 -f mp4 /tmp/test.mp4


        docker run jrottenberg/ffmpeg:4.0-ubuntu -stats  \
        -i http://www.oschina.net \
        -loop 0  \
        -final_delay 500 -c:v gif -f gif -ss 00:49:42 -t 5 - > trow_ball.gif


docker run --rm --name=grid -p 4444:24444 -p 5920:25900 \
  --shm-size=1g -e VNC_PASSWORD=hola \
  -e VIDEO=true elgalu/selenium:3.14.

docker run --rm -e DISPLAY=$DISPLAY --privileged -v ~/Applications/endless/shot:/root/shot -w /root/shot -it take:1.0.4 /bin/bash

centos7
yum -y install epel-release
rpm -Uvh http://li.nux.ro/download/nux/dextop/el7/x86_64/nux-dextop-release-0-5.el7.nux.noarch.rpm
yum install ffmpeg ffmpeg-devel -y

--privileged

apt-get install xvfb
Xvfb :1 &

export DISPLAY=:0.0
Xvfb -ac :0.0 -screen 0 1280x1024x16 &

ffmpeg -video_size 1280x1024 -framerate 16 -f x11grab -i :0.0 output2.mp4


# bug
most likely you need to configure your suid sandbox correctly docker
export DISPLAY=:0.0


take:1.0.5

export DISPLAY=:99
Xvfb -ac :99 -screen 0 1280x1024x16 &
ffmpeg -video_size 1280x1024 -framerate 16 -f x11grab -i :99 output99.mp4
```

## dockerfile

```

FROM holdlg/take:1.0.5

WORKDIR /root/take

ENV URL http://www.eerc.cc
ENV USERID DEFAULTID
ENV TAKEDIR DEFAULTID

# RUN mkdir -p /root/take/resource/$USERID/$TAKEDIR
RUN export DISPLAY=:99
RUN Xvfb -ac :99 -screen 0 1280x1024x16 &
# RUN ffmpeg -video_size 1280x1024 -framerate 16 -f x11grab -i :99 $TAKEDIR.mp4

# NV HTTP_PROXY http://172.168.1.2:3128
# ENV HTTPS_PROXY https://172.168.1.2:3128


CMD python3 cut_docker.py $URL $USERID
```
