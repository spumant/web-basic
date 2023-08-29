<script setup>
import {ref} from "vue";
//1-对象
const num1 = ref({
  count: 0,
})
const addNum1 = () => {
  num1.value.count++
}
//2-简单类型,数字，字符串，布尔
const num2 = ref(0)
const addNum2 = () => {
  num2.value++
}
//3-数组类型
const list = ref([1, 2, 3, 4, 5, 6])
setTimeout(() => {
  list.value.push(7)
}, 2000)
</script>
<template>
  <div>
    <button @click="addNum1">{{ num1.count }}</button>
    <br>
    <button @click="addNum2">{{ num2 }}</button>
    {{ list }}
  </div>
</template>

<style scoped>

</style>
