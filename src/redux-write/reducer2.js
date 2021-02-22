const initState = {
    num:0
}
const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, num: state.num + 1 };
      case "decrease":
        return { ...state, num: state.num - 1 };
        default:
          return initState;
    }
};

export default reducer;