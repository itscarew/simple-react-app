export const FetchRobotsStart = () => ({
  type: "FETCH_ROBOTS_START",
});

export const FetchRobotsSuccess = (robots) => ({
  type: "FETCH_ROBOTS_SUCCESS",
  payload: robots,
});

export const FetchRobotsFailure = (errorMessage) => ({
  type: "FETCH_NEWS_FAILURE",
  payload: errorMessage,
});

export const FetchRobotsAsync = (robots) => {
  return (dispatch) => {
    dispatch(FetchRobotsStart());

    const url = `https://jsonplaceholder.typicode.com/users`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(FetchRobotsSuccess(json)))
      .catch((err) => dispatch(FetchRobotsFailure(err)));
  };
};
