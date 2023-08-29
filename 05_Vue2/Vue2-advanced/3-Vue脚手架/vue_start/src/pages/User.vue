<template>
  <h2>用户信息相关内容</h2>
</template>

<script>
export default {
  name: "User",
  beforeRouteEnter(to,from,next){
    console.log("组件内前置路由守卫被触发", to);
    if (to.path === '/user') {
      if (localStorage.getItem("user") === "admin") {
        next();
      } else {
        alert("非admin账号无权限操作");
      }
    } else {
      next();
    }
  },
}
</script>

<style scoped>

</style>