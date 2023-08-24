
<template>
  <h3>模板语法</h3>
  <p>{{ msg }}</p>
  <p>{{ number + 1 }}</p>
  <p>
    {{ ok ? "Yes" : "No" }}
  </p>
  <p>{{ message.split("").reverse().join("") }}</p>
  <p v-html="rawHtml"></p>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello world",
      number: 10,
      ok: true,
      message: "大家好",
      rawHtml: "<a href='http://www.baidu.com'>百度</a>"

    }
  }
}
</script>


<style scoped></style>
