<script setup>
const emit = defineEmits(['funGetAddress'])

const sendAddress = () => {
  emit('funGetAddress','浙江大学软件学院')
}
</script>

<template>
  <div class="school-style">
    <h3>子组件-School</h3>
    <button @click="sendAddress">向父组件发送学校地址</button>
  </div>
</template>


<style scoped>
.school-style {
  background-color: #1eacda;
}
</style>