<script setup>
import School from "./components/School.vue";
import {provide} from "vue";

provide('studentName', 'jack')
</script>

<template>
  <div>
    <h2>父组件-App</h2>
    <School></School>
  </div>
</template>


<style scoped>

</style>
