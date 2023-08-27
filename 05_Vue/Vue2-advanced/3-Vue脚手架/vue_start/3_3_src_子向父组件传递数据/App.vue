<template>
<div class="app-style">
  <h3>子组件参数【props方式】:{{ schoolName }}</h3>
  <h3>子组件参数【$emit方式】:{{ address }}</h3>
  <!--方式1-props-->
<!--  <School :funGetSchoolName="getSchoolName"></School>-->
  <!--方式2$emit-->
<!--  <School @funGetAddress="getAddress"></School>-->
  <!--方式3-$on挂载事件,$emit调用-->
  <School ref="student"></School>
</div>
</template>

<script>
import School from "./components/School"
export default {
  name: "App",
  data() {
    return {
      age: 20,
      schoolName:"",
      address:"",
    }
  },
  components:{
    School : School
  },
  methods:{
    getSchoolName(schoolName){
      console.log("函数被触发"+schoolName);
      this.schoolName = schoolName
    },
    getAddress(address,...args){
      this.address = address;
      console.log(args);
    }
  },
  mounted() {
    this.$refs.student.$on("funGetAddress",this.getAddress)
  }
}
</script>

<style scoped>
.app-style {
  background-color: #f7ecb5;
}
</style>