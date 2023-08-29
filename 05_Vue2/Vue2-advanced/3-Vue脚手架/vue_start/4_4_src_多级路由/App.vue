<template>
  <div>
    <div class="row">
      <TopHeader></TopHeader>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" to="/user">用户管理</router-link>
          <router-link class="list-group-item" active-class="active" to="/school">学校管理</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
<!--            <router-view></router-view>-->
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";

export default {
  name: "App",
  components: {TopHeader},
  comments:{
    TopHeader:TopHeader
  }
}
</script>

<style scoped>
</style>