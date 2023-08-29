<template>
  <div class="school-style">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="changeSchoolName">改变学校名称</button>
    <button @click="sendSchoolName">方式1-props:向父组件发送学校名称</button><br>
    <button @click="sendAddress">方式2,方式3$emit:向父组件发送学校地址</button><br>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      schoolName: "浙江大学",
      address: "杭州紫金港",
    }
  },
  props:["funGetSchoolName"],
  methods: {
    changeSchoolName() {
      this.schoolName = "浙江大学软件学院"
    },
    sendSchoolName(){
      this.funGetSchoolName(this.schoolName);
    },
    sendAddress(){
      this.$emit("funGetAddress",this.address,10,"hello")
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