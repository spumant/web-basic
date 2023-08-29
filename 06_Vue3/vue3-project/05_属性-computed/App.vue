<script setup>
import {computed, ref} from "vue";

const data = ref({
  totalPrice: 2000,
  amount: 10,
  discount: 8,
})

const avgPrice = computed(() => {
  return (data.value.totalPrice / data.value.amount) * (data.value.discount / 10)
})
</script>
<template>
  <div>
    总价：<input type="text" v-model="data.totalPrice"> <br>
    数量：<input type="text" v-model="data.amount"> <br>
    折扣：<input type="text" v-model="data.discount"> 折 <br>
    折扣平均单价：<input type="text" v-model="avgPrice"> 元 <br>
  </div>
</template>

<style scoped>

</style>
