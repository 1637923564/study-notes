<template>
  <div class="Login">
    <h1>This is an <a href="javaScript:" @click="userLogin">{{ logStatus }}</a> page</h1>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      logStatus: "login"
    };
  },
  methods: {
    userLogin() {
      if (this.$store.state.userLogin && this.logStatus === "logout") {
        this.$store.commit("AddUser", null);
        this.logStatus = this.logStatus === "login" ? "logout" : "login";
      } else {
        this.$store.commit("AddUser", "LaoTang");
        this.logStatus = this.logStatus === "login" ? "logout" : "login";
      }
    }
  }
};
</script>
