# kubeadm


```shell
kubeadm token list
kubeadm token create

openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2>/dev/null | \
   openssl dgst -sha256 -hex | sed 's/^.* //'

# root
kubeadm join <control-plane-host>:<control-plane-port> --token <token> --discovery-token-ca-cert-hash sha256:<hash>

kubeadm join 10.0.35.11:6443 --token 65vlcg.ief26mt099he2wqn --discovery-token-ca-cert-hash sha256:4f3bfce82460881e94c5594bf2f249956eaaa9e2f9c814c5649320bcef9c6741
```