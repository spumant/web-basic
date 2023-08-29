<template>
  <div class="school-style">
    <h2>学校名称：{{schoolName | mySlice}}</h2>
    <h2>学校地址：{{address}}</h2>
    <input v-fbind="address">
    <button @click="testHello">测试插件hello方法</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data(){
    return{
      schoolName:"浙江大学",
      address:"杭州紫金港",
    }
  },
  methods:{
    testHello(){
      this.hello();
    }
  }

}
</script>

<!--scoped 防止组件之间样式冲突-->
<style scoped>
.school-style {
  background-color: #5bc0de;
  margin: 20px;
}
</style>