<script>
import app, { api } from 'xadmin'

export default {
  data() {
    return {
      msg: 'Hello!',
      color: '#409EFF'
    }
  },
  props: ['input', 'number', 'dvalue'],
  watch: {
    color(newColor, oldColor) {
      this.input && this.input.onChange(newColor)
    }
  },
  methods: {
    log() {
      console.log(this.msg)
    },
    dbclick() {
      this.msg = "双击了"
      api({name: 'core/model'})
        .get('611c710edad606abc5abd3d8')
        .then(json => {
          this.msg = json.name
        })
        .catch(console.error)
    }
  }
}
</script>

<template>
  <el-row class="mb-4">
    <el-button type="success">计数器按钮 {{ number }}</el-button>
    <el-button type="primary">数据点 {{ dvalue }}</el-button>
    <el-button><el-color-picker v-model="color" /></el-button>
    <div @click="log" @dblclick="dbclick">{{ msg }}</div>
  </el-row>
</template>