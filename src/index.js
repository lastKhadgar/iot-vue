import app, { api } from 'xadmin'
import React from 'react'
import VueWidget from './VueWidget'
import VuePage from './VuePage'
// import 'element-plus/dist/index.css'

import { useVueComponent } from './hooks'

export default app.use({
  name: 'iot.vue',
  menuItems: [
    { title: 'VUE', url: '/app/vue', icon: 'Debug', permission: 'Development.vue' }
  ],
  routers: {
    '/app/': {
      path: 'vue',
      breadcrumbName: 'VUE组件',
      component: VuePage
    }
  },
  dashboard_widgets: {
    VueWidget
  },
  hooks: {
    vue: useVueComponent
  }
})
