<script setup>
import {computed, ref, watch} from "vue";

let happy = ref(true)
let name = ref('jack')

const mood = computed(() => {
  return happy.value ? "高兴" : "难过"
})

const changeMood = () => {
  happy.value = !happy.value
  name.value = happy.value ? 'jack' : 'tom'
}

// watch(happy, (newValue, oldValue) => {
//   console.log(`happy发生了变化，旧值为${oldValue},新值为${newValue}`)
// })

// watch(happy, (value) => {
//   console.log(`新值为${value}`)
// })

watch([happy, name], ([newHappy, newName], [oldHappy, oldName]) => {
  console.log(`happy:${newHappy},${oldHappy}、name:${newName},${oldName}`)
})
</script>
<template>
  <div>
    <h2>我是{{ name }},今天我很{{ mood }}</h2>
    <button @click="changeMood"></button>
  </div>
</template>

<style scoped>

</style>
