<template>
  <div :class="msg">
    测试
  </div>
  <button :disabled="isButtonDisabled">Button</button>
  <div v-bind="objectOfAttrs"></div>
</template>

<script>
export default {
  data() {
    return {
      msg: "active",
      isButtonDisabled: true,
      objectOfAttrs: {
        id: "aid",
        class: "alcass"
      }
    }
  }
}

</script>

<style scoped></style>