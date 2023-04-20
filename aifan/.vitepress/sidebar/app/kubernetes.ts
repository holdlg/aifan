export default function appKubernetes() {
  return [
    {
      text: 'Kubernetes',
      collapsible: true,
      collapsed: false,
      items: [
        { text: 'k8s与containerd', link: '/app/kubernetes/k8s与containerd' },
        { text: 'k8s_v1.25调试记录', link: '/app/kubernetes/k8s_v1.25调试记录' },
        { text: 'k8s与docker', link: '/app/kubernetes/k8s与docker' }
      ]
    },
    {
      text: '参考命令',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'kubeadm', link: '/app/kubernetes/kubeadm' },
        { text: 'kubectl', link: '/app/kubernetes/kubectl' },
        { text: 'crictl', link: '/app/kubernetes/crictl' },
        { text: 'nerdctl', link: '/app/kubernetes/nerdctl' }
      ]
    },
    {
      text: 'YAML',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'deployment', link: '/app/kubernetes/deployment' },
        { text: 'pod', link: '/app/kubernetes/pod' },
        { text: 'services', link: '/app/kubernetes/services' },
        { text: 'hostpath', link: '/app/kubernetes/hostpath' }
      ]
    },
    {
      text: '辅助工具',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Harbor', link: '/app/kubernetes/Harbor' },
        { text: 'helm', link: '/app/kubernetes/helm' },
        { text: 'KubeSphere', link: '/app/kubernetes/KubeSphere' }
      ]
    },
    {
      text: '应用部署',
      collapsible: true,
      collapsed: true,
      items: [{ text: '安装ECK', link: '/app/kubernetes/安装ECK' }]
    }
  ]
}
