<!--<script>-->
<!--export default {-->
<!--  setup() {-->
<!--    const name = 'jack'-->
<!--    const showName = () => {-->
<!--      console.log(name)-->
<!--    }-->
<!--    return {-->
<!--      name,-->
<!--      showName,-->
<!--    }-->
<!--  },-->
<!--  beforeCreate() {-->
<!--    console.log('beforeCreate')-->
<!--  }-->
<!--}-->
<!--</script>-->
<script setup>
const name = 'jack'
const showName = () => {
  console.log(name)
}
</script>
<template>
  <div>
    {{ name }}
    <button @click="showName">显示姓名</button>
  </div>
</template>

<style scoped>

</style>
