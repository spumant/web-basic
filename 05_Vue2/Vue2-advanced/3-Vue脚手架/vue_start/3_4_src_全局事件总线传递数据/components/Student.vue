<template>
  <div class="student-style">
    <h2>学生姓名：{{ studentName }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      studentName: '张三',
      age: 18
    }
  },
  mounted() {
    this.$bus.$on("funGetStudentName",(stuName)=>{
      this.studentName = stuName;
    })
  },
  beforeDestroy() {
    this.$bus.$off("funGetStudentName");
  }
}
</script>

<style scoped>
.student-style {
  background-color: pink;
  margin: 20px;
}
</style>