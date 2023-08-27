<template>
  <ul>
    <li v-for="item in studentList" :key="item.id" >
    </li>
  </ul>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      studentList: [
        {id: "001", name: "张三"},
        {id: "002", name: "李四"}
      ]
    }
  }
}
</script>
<style scoped>

</style>