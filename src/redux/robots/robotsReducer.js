const INIT_STATE = {
  robots: [],
  isFetching: false,
  errorMessage: undefined,
};

export const robotsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "FETCH_ROBOTS_START":
      return {
        ...state,
        isFetching: true,
      };

    case "FETCH_ROBOTS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        robots: action.payload,
      };

    case "FETCH_NEWS_FAILURE":
      return {
        ...state,
        isFetching: false,
        errorMessage: true,
      };

    default:
      return state;
  }
};
