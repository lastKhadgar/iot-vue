import React from 'react'
import ReactDOM from 'react-dom'
import { createApp, h } from 'vue'

const vueApp = (VueComponent, props) => {
  return createApp({
    data() {
      return { props: { ...props } }
    },
    render() {
      return h(VueComponent, this.props)
    } 
  })
}

const useVueComponent = ({ VueComponent, bindDataNames=[], useApp=app=>app, ...props }) => {
  const el = React.useRef()
  const vm = React.useRef()

  React.useLayoutEffect(() => {
    vm.current = useApp(vueApp(VueComponent, props)).mount(el.current)
    //return () => vm.current.$destroy()
  }, [ ])

  _.forEach(bindDataNames, propName => {
    React.useEffect(() => {
      if(vm.current) {
        vm.current.$data.props[propName] = props[propName]
      }
    }, [ props[propName] ])
  })

  return { dom: React.useMemo(() => <div ref={el}></div>, []), vm }
}

export {
  useVueComponent
}
