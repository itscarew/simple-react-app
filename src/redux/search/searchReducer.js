const INIT_STATE = {
  searchField: "",
};

export const searchReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CHANGE_SEARCHFIELD":
      return {
        ...state,
        searchField: action.payload,
      };

    default:
      return state;
  }
};
