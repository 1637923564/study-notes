<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ myName }}</h2>
    <input type="text" @click="mkEvent">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    myName: String
  },
  data() {
    return {
      name: "XiaoTang"
    };
  },
  methods: {
    mkEvent() {
      this.$emit("pushP", this.name);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
