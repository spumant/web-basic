<template>
  <h2>用户信息相关内容</h2>
</template>

<script>
export default {
  name: "User",
  mounted() {
    console.log("挂载User组件", this);
    window.userRouter = this.$router;
  },
  beforeDestroy() {
    console.log("销毁User组件");
  }
}
</script>

<style scoped>

</style>