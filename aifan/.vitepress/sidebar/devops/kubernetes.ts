export default function devopsKubernetes() {
  return [
    {
      text: 'Kubernetes',
      collapsible: true,
      collapsed: false,
      items: [
        { text: 'k8s与containerd', link: '/devops/kubernetes/k8s与containerd' },
        { text: 'k8s_v1.25调试记录', link: '/devops/kubernetes/k8s_v1.25调试记录' },
        { text: 'k8s与docker', link: '/devops/kubernetes/k8s与docker' }
      ]
    },
    {
      text: '参考命令',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'kubeadm', link: '/devops/kubernetes/kubeadm' },
        { text: 'kubectl', link: '/devops/kubernetes/kubectl' },
        { text: 'crictl', link: '/devops/kubernetes/crictl' },
        { text: 'nerdctl', link: '/devops/kubernetes/nerdctl' }
      ]
    },
    {
      text: 'YAML',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'deployment', link: '/devops/kubernetes/deployment' },
        { text: 'pod', link: '/devops/kubernetes/pod' },
        { text: 'services', link: '/devops/kubernetes/services' },
        { text: 'hostpath', link: '/devops/kubernetes/hostpath' }
      ]
    },
    {
      text: '辅助工具',
      collapsible: true,
      collapsed: true,
      items: [
        { text: 'Harbor', link: '/devops/kubernetes/Harbor' },
        { text: 'helm', link: '/devops/kubernetes/helm' },
        { text: 'KubeSphere', link: '/devops/kubernetes/KubeSphere' }
      ]
    },
    {
      text: '应用部署',
      collapsible: true,
      collapsed: true,
      items: [{ text: '安装ECK', link: '/devops/kubernetes/安装ECK' }]
    }
  ]
}
