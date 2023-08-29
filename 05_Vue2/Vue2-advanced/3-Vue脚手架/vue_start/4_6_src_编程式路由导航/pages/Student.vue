<template>
  <ul>
    <li v-for="item in studentList" >
      <router-link :to="{
        // 方式2-路由命名方式-query对象传递
        name:'stu_info',
        query:{
          id:item.id,
          name:item.name
        }
      }">{{item.id}}-{{item.name}}</router-link>
      <button @click="pushHandle(item)">push处理</button>
      <button @click="replaceHandle(item)">replace处理</button>
    </li>
    <hr>
    <router-view></router-view>
  </ul>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      studentList: [
        {id: "001", name: "张三"},
        {id: "002", name: "李四"}
      ]
    }
  },
  methods:{
    pushHandle(item){
      this.$router.push({
        name:"stu_info",
        query:{
          id:item.id,
          name:item.name
        }
      })
    },
    replaceHandle(item){
      this.$router.replace({
        name:"stu_info",
        query:{
          id:item.id,
          name:item.name
        }
      })
    },
  }
}
</script>

<style scoped>

</style>