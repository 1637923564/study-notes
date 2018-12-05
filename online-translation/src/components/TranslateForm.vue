<template>
  <div class="translateFrom">
    <el-input @keyup.enter.native="translate" placeholder="请输入内容" v-model="tar" clearable></el-input>
    <el-select v-model="lang" placeholder="请选择">
      <el-option v-for="item in languages" :key="item.value" :label="item.label" :value="item.value">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.name }}</span>
      </el-option>
    </el-select>
    <el-button @click="translate" type="primary">翻译</el-button>
  </div>
</template>

<script>
export default {
  name: "translateFrom",
  data() {
    return {
      lang: "",
      tar: "",
      languages: [
        { label: "中文", name: "Chinese", value: "zh" },
        { label: "英语", name: "English", value: "en" },
        { label: "日语", name: "Japanese", value: "ja" },
        { label: "韩语", name: "Korean", value: "ko" },
        { label: "俄语", name: "Russion", value: "ru" }
      ]
    };
  },
  methods: {
    translate() {
      this.$emit("getTranCon", this.lang, this.tar);
    }
  },
  beforeMount() {
    this.lang = "zh";
  }
};
</script>

<style lang="scss" scoped>
.el-input {
  width: 570px;
  margin-right: 5px;
}
.el-select {
  width: 140px;
  margin-right: 5px;
}
</style>
