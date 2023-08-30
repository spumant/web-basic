<script setup>
import {ref} from "vue";
import {useCounterStore} from "@/stores/counter";
import {storeToRefs} from "pinia";
import {useUserStore} from "@/stores/user";

const n = ref(1)
const counterStore = useCounterStore()
// state数据响应式解构
const {sum, cSum} = storeToRefs(counterStore)

// 方法-普通解构
const {add, sub, addOdd, addWait} = counterStore

const userStore = useUserStore()
</script>

<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前计算和为：{{ cSum }}</h3>
    <h3>人数：{{ userStore.userList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(n)">+</button>
    <button @click="sub(n)">-</button>
    <button @click="addOdd(n)">当前求和为奇数再加</button>
    <button @click="addWait(n)">等一等再加</button>
  </div>
</template>

<style scoped>

</style>