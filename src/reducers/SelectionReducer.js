

export default (state = null, action) => {
  switch (action.type) {
    case 'SelectedLibrary':
      return action.payload;
    default:
      return state;
  }
};
