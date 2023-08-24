<template>
  <div :class="msg">
    测试
  </div>
  <button :disabled="isButtonDisabled">Button</button>
  <div v-bind="objectOfAttrs">测试2</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "active",
      isButtonDisabled: false,
      objectOfAttrs: {
        id: "aid",
        class: "alcass"
      }
    }
  }
}

</script>

<style scoped></style>