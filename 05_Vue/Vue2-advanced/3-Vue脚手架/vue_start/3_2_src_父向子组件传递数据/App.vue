<template>
<div>
  <School teacherName="王强" :salary="5000" :age="age"></School>
</div>
</template>

<script>
import School from "./components/School"
export default {
  name: "App",
  data() {
    return {
      age: 20,
    }
  },
  components:{
    School : School
  }
}
</script>

<style scoped>

</style>