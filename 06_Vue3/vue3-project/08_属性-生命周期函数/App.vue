<script setup>
import {onBeforeMount, onMounted} from "vue";

onBeforeMount(() => {
  console.log("1")
})
onMounted(() => {
  console.log("2-1")
})
onMounted(() => {
  console.log("2-2")
})
</script>
<template>

</template>

<style scoped>

</style>
