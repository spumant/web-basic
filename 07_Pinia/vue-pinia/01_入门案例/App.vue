<script setup>
import {useCounterStore} from "@/stores/counter";

const counterStore = useCounterStore()
</script>

<template>
  <button @click="counterStore.add()">{{ counterStore.sum }}</button>
</template>

<style scoped>

</style>
