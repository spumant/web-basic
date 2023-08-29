<template>
  <div>
    <h2>学校信息相关内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link class="list-group-item" active-class="active" to="/school/student">学生信息查看</router-link>
      </li>
      <li>
        <router-link replace class="list-group-item" active-class="active" to="/school/teacher">教师信息查看</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "School",
}
</script>


<style scoped>

</style>