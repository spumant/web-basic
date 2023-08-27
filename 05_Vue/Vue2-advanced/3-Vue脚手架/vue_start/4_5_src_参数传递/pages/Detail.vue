<template>
<ul>
<!--  方式1-2-query-->
<!--  <li>{{$route.query.id}}</li>-->
<!--  <li>{{$route.query.name}}</li>-->
  <!--  方式3-params接收-->
<!--  <li>{{$route.params.id}}</li>-->
<!--  <li>{{$route.params.name}}</li>-->
  <!--  方式4-props接收-->
  <li>id:{{id}}</li>
  <li>name:{{name}}</li>
</ul>
</template>

<script>
export default {
  name: "Detail",
  props:["id","name"]
}
</script>

<style scoped>

</style>