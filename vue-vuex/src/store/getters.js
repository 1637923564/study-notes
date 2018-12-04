export default {
  isLogin(state) {
    return state.userLogin ? state.userLogin : "未登录!";
  }
};
