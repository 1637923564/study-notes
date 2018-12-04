export default {
  asyncAddNum(context, payload) {
    setTimeout(() => {
      context.commit("AddNum", payload);
    }, 500);
  }
};
