<script setup>
import {ref} from "vue";

const count = ref(0)
const addCount = () => {
  count.value++
}
</script>

<template>
  <div>
    <button @click="addCount">{{ count }}</button>
  </div>
</template>

<style scoped>

</style>
