<template>
  <div>
    <h2>学校信息相关内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <a class="list-group-item active">学生信息查看</a>
      </li>
      <li>
        <a class="list-group-item">教师信息查看</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "School",
  timer:null,
  mounted() {
    console.log("挂载School组件:", this);
    window.schoolRouter = this.$router;

  },
  beforeDestroy() {
    console.log("销毁School组件");

  },
  activated() {
    this.timer = setInterval(()=>{
      console.log("hello");
    },1000);
  },
  deactivated() {
    clearInterval(this.timer);
  }
}
</script>


<style scoped>

</style>