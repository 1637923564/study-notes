<template>
  <div class="translatedText">
    {{ translated }}
  </div>
</template>

<script>
export default {
  name: "translatedText",
  props: ["translated"]
};
</script>

<style lang="scss" scoped>
.translatedText {
  font-family: "Hiragino Sans GB";
  color: #67c23a;
  font-size: 30px;
}
</style>
