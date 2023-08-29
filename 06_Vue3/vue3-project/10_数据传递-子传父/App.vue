<script setup>
import {ref} from "vue";
import School from "@/components/School.vue";

const myAddress = ref('')
const getAddress = (address) => {
  myAddress.value = address
}
</script>

<template>
  <div>
    <h2>父组件-App</h2>
    <h2>学校地址：{{ myAddress }}</h2>
    <School @funGetAddress="getAddress"></School>
  </div>
</template>


<style scoped>

</style>
