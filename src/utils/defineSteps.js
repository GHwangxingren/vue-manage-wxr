const steps = [
  {
    element: '#side-bar', //显示高亮的元素
    popover: {
        title: '菜单导航', //引导标题
        description: '点击菜单可切换右侧页面内容', //引导描述
        position: 'right' //引导出现的位置
    }
  },
  {
    element: '#collapse',
    popover: {
        title: '折叠按钮',
        description: '控制左侧菜单的展开与收起',
        position: 'bottom'
    }
  },
  {
    element: '#bread-crumb',
    popover: {
        title: '面包屑导航',
        description: '用于显示当前菜单的位置',
        position: 'bottom'
    }
  },
  {
    element: '#full-page',
    popover: {
        title: '全屏显示',
        description: '点击图标，放大全屏显示页面',
        position: 'bottom'
    }
  },
  {
    element: '#message',
    popover: {
        title: '消息',
        description: '显示通知消息',
        position: 'bottom'
    }
  }
];

export default steps;

