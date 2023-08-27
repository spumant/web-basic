<template>
  <div class="school-style">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="changeSchoolName">改变学校名称</button>
    <Student></Student>
  </div>
</template>

<script>
import Student from "./Student";

export default {
  name: "School",
  components: {
    Student : Student
  },
  data() {
    return {
      schoolName: "浙江大学",
      address: "杭州紫金港",
    }
  },
  methods: {
    changeSchoolName() {
      this.schoolName = "浙江大学软件学院"
    }
  }
}
</script>

<style scoped>
.school-style {
  background-color: #5bc0de;
  margin: 20px;
}
</style>