<template>
  <div id="app">
    <router-link to="/">HOME</router-link> |
    <router-link to="/login">LOGIN</router-link>
    <h3>命名空间User的值：{{ userName }}</h3>
    <h3>vuex中num的值： {{ $store.state.num }} --- {{ num }}</h3>
    <h3>当前的登录状态：{{ $store.getters.isLogin }}</h3>
    <el-button type="primary" @click="editNum">修改全局vuex中num的值</el-button>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button @click="asyncAddNum(input)">点击我异步修改</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "app",
  data() {
    return {
      input: ""
    };
  },
  computed: {
    ...mapState(["num"]),
    ...mapState("user", ["userName"])
  },
  methods: {
    ...mapMutations(["AddNum"]),
    editNum() {
      this.AddNum(10);
    },
    asyncAddNum(input) {
      this.$store.dispatch("asyncAddNum", input);
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

  .el-input__inner {
    width: 100px;
  }
}
</style>
