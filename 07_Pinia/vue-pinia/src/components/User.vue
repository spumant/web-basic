<script setup>
import {ref} from "vue";
import {useUserStore} from "@/stores/user";

const user = ref({
  name: '',
  age: ''
})

const userStore = useUserStore()
</script>

<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="user.name">
    <input type="text" placeholder="请输入年龄" v-model="user.age">
    <button @click="userStore.add_user(user)">添加</button>
    <button @click="userStore.addUserByServer()">从服务器中生成用户</button>
    <ul>
      <li v-for="u in userStore.userList" :key="u.id">{{ u.name }}-{{ u.age }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>