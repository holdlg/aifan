# [Docker] 编译code-server


```
FROM codercom/code-server:2.1472-vsc1.38.1

user root
# Update to zsh shell
RUN sudo apt-get install zsh -y
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"


# Setup add ppa
RUN sudo apt-get update
RUN sudo apt-get install software-properties-common -y

# Other stuff
COPY settings.json /root/.local/share/code-server/User/settings.json
RUN git clone https://github.com/zsh-users/zsh-autosuggestions /root/.oh-my-zsh/plugins/zsh-autosuggestions
RUN echo "source ~/.oh-my-zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh" >> /root/.zshrc


# # Setup python development
# RUN sudo -E add-apt-repository ppa:deadsnakes/ppa
# RUN sudo apt-get install python3.7 -y
# RUN sudo ln -s /usr/bin/python3.7 /usr/bin/python
# RUN sudo curl https://bootstrap.pypa.io/get-pip.py | sudo python
# # Install extensions
# RUN code-server --install-extension ms-python.python

# # Setup node12 development
# RUN sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
# RUN sudo apt-get install nodejs -y
# RUN sudo npm config set registry https://registry.npm.taobao.org

# Setup node10 development
RUN sudo curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
RUN sudo apt-get install nodejs -y
RUN sudo npm config set registry https://registry.npm.taobao.org



RUN mkdir -p /root/project

WORKDIR /root/project

ENV PASSWORD="tech"

EXPOSE 8080

ENTRYPOINT ["dumb-init", "code-server", "--host", "0.0.0.0"]

```

settings.json

```json
{
    "terminal.integrated.shell.linux": "/bin/zsh"
}
```
