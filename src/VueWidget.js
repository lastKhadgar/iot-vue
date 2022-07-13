import app, { use } from 'xadmin'
import React from 'react'
import TestWidget from './TestWidget.vue'
import ElementPlus from 'element-plus'

const VueComponent = (props) => {
  const { dom, vm } = use('vue', {
    VueComponent: TestWidget, 
    bindDataNames: [ 'number', 'dvalue' ], 
    useApp: app => app.use(ElementPlus),
    ...props 
  })

  React.useEffect(() => {
    setInterval(() => {
      if(vm.current) {
        vm.current.props.number++
      }
    }, 1000)
  }, [])

  return dom
}

// 组件的可配置参数
const paramSchema = (n) => {
  return {
    type: 'object',
    properties: {
      title: {
        title: '标题',
        type: 'string'
      },
      number: {
        title: '测试数字',
        type: 'number'
      },
      dvalue: {
        title: '数据点',
        type: 'number'
      },
    }
  }
}

const VueWidget = {
  title: 'VUE组件',
  category: '其他',
  icon: require('./Vue.svg'),
  component: VueComponent,
  initLayout: { width: 200, height: 100 },
  paramSchema,
  fieldWidget: true
}

export default VueWidget
