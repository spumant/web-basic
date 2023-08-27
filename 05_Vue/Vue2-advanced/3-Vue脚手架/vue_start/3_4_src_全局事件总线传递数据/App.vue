<template>
<div class="app-style">
  <button @click="sendStudentName">向Student传递数据</button>
  <h3>总管组件App</h3>
  <School></School>
</div>
</template>

<script>
import School from "./components/School"
export default {
  name: "App",
  components:{
    School : School
  },
  methods:{
    sendStudentName(){
      this.$bus.$emit("funGetStudentName","学生小明");
    }
  }
}
</script>

<style scoped>
.app-style {
  background-color: #f7ecb5;
}
</style>