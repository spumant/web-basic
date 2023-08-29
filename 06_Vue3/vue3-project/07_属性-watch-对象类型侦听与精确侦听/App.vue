<script setup>
import {computed, ref, watch} from "vue";

const data = ref({
  happy: true,
  name: 'jack'
})

const mood = computed(() => {
  return data.value.happy ? '高兴' : '难过'
})

const changeMood = () => {
  data.value.happy = !data.value.happy
}
const changeName = () => {
  data.value.name = data.value.happy ? 'jack' : 'tom'
}

// watch(data, value => {
//   console.log(`${value.happy}`)
//   console.log(`${value.name}`)
// }, {deep: true, immediate: true})

//精确侦听
watch(() => data.value.happy, (newValue, oldValue) => {
  console.log(`old:${oldValue},new:${newValue}`)
})
</script>
<template>
  <div>
    <h2>{{ data.name }},{{ mood }}</h2>
    <button @click="changeMood">改变心情</button>
    <br>
    <button @click="numbers.x++">改变姓名</button>
  </div>
</template>

<style scoped>

</style>
