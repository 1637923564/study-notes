export default {
  AddNum(state, payload) {
    state.num += Number(payload);
  },
  AddUser(state, user) {
    state.userLogin = user;
  }
};
