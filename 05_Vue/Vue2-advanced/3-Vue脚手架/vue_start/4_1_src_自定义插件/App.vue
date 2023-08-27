<template>
  <div class="app-style">
    <h3>总管组件App</h3>
    <School></School>
  </div>
</template>

<script>
//引入其他组件
import School from "./components/School";
export default {
  name: "App",
  components:{
    School
  }
}
</script>

<style scoped>
.app-style {
  background-color: #f7ecb5;
}
</style>