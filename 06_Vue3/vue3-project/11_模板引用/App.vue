<script setup>
import {ref} from "vue";

const school = ref(null)
const sendLoadData = () => {
  school.value.loadData({id: 1, name: 'jack'})
}


</script>

<template>
  <div>
    <h2>父组件-App</h2>
    <h2>学校地址：{{ school }}</h2>
    <button @click="sendLoadData">向子组件传递数据</button>
    <School ref="school"></School>
  </div>
</template>


<style scoped>

</style>
