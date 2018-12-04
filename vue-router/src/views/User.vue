<template>
  <div class="user">
    <h1>User UI !!!!</h1>
    <div id="nav">
      <router-link to="views" append>views</router-link>
    </div>
    <div class="content">
      <transition name="fade-out">
        <router-view></router-view>
      </transition>
      <transition name="fade-out">
        <router-view name="con"></router-view>
      </transition>
      <transition name="fade-out">
        <router-view name="foo"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter: (to, from, next) => {
    console.group("%c 组件内的守卫：beforeRouteEnter", "color: red");
    console.log(`${from.path} >>> ${to.path}`);
    console.groupEnd();
    next();
  },
  beforeRouteUpdate: (to, from, next) => {
    console.group("%c 组件内的守卫：beforeRouteUpdate", "color: red");
    console.log(`${from.path} >>> ${to.path}`);
    console.groupEnd();
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.group("%c 组件内的守卫：beforeRouteLeave", "color: red");
    console.log(`${from.path} >>> ${to.path}`);
    console.groupEnd();
    next();
  }
};
</script>


<style lang="scss" scoped>
.user {
  .content {
    display: flex;
    flex-wrap: wrap;
    .lf {
      flex: 1;
      background-color: #ccc;
    }
    .con {
      flex: 3;
      background-color: #326999;
    }
    .foo {
      width: 100%;
      background-color: #000;
      color: #ccc;
    }
  }
}
</style>
