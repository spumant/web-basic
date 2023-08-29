<script setup>
import {ref} from "vue";

const address = ref('浙江大学软件学院')
const loadData = (data) => {
  console.log(data)
}

defineExpose({
  address,
  loadData
})
</script>

<template>
  <div class="school-style">
    <h3>子组件-School</h3>
  </div>
</template>


<style scoped>
.school-style {
  background-color: #1eacda;
}
</style>