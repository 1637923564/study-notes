<template>
  <div id="app">
    <h1>在线翻译</h1>
    <p>简单 | 易用 | 快捷</p>
    <translate-form @getTranCon="toTrans"></translate-form>
    <translated-text :translated="translated"></translated-text>
  </div>
</template>

<script>
import TranslateForm from "@/components/TranslateForm.vue";
import TranslatedText from "@/components/TranslatedText.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    TranslateForm,
    TranslatedText
  },
  data() {
    return {
      translated: ""
    };
  },
  methods: {
    toTrans(lang, tar) {
      axios
        .get(
          `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181205T062720Z.a57199f08ab6686f.1e0b79f08dc4dd6d170637b483025e63800b9cfc&text=${tar}&lang=${lang}`
        )
        .then(res => {
          this.translated = res.data.text[0];
        });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-top: 100px;

  p {
    color: #909399;
  }
  & > h1 {
    margin: 0 auto;
    margin-bottom: 20px;
    width: 135px;
    height: 35px;
    line-height: 35px;
    padding-left: 35px;
    background: url(./assets/logo.png) no-repeat;
    background-size: contain;
  }
  .translateFrom {
    margin-top: 50px;
  }
  .translatedText {
    margin-top: 30px;
  }
}
</style>
