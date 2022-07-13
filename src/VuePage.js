import app, { use } from 'xadmin'
import React from 'react'
import TestWidget from './TestWidget.vue'
import ElementPlus from 'element-plus'

const VueComponent = (props) => {
  const { dom, vm } = use('vue', {
    VueComponent: TestWidget, 
    useApp: app => app.use(ElementPlus),
    ...props 
  })

  React.useEffect(() => {
    setInterval(() => {
      if(vm.current) {
        vm.current.$data.number++
      }
    }, 1000)
  }, [])
  
  return dom
}

export default VueComponent
