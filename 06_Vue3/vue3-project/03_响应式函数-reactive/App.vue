<script setup>
import {reactive} from "vue";

let num = 0
const addNum = () => {
  num++
  console.log(num)
}
//响应式对象
const state = reactive({
  count: 0,
})
const addCount = () => {
  state.count++
  console.log(state.count)
}
</script>
<template>
  <div>
    <button @click="addNum">{{ num }}</button>
    <button @click="addCount">{{ state.count }}</button>
  </div>
</template>

<style scoped>

</style>
