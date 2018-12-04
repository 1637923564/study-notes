<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld @pushP="getName($event)" :myName="name" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      name: "laotang"
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    getName(e) {
      console.log(e);
    }
  }
};
</script>
