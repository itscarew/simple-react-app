import { createSelector } from "reselect";

const selectRobotsList = (state) => state.robots;

const selectSearch = (state) => state.search;

export const selectRobots = createSelector(
  [selectRobotsList],
  (robots) => robots.robots
);

export const selectSearchField = createSelector(
  [selectSearch],
  (search) => search.searchField
);

export const selectErrorMessage = createSelector(
  [selectRobotsList],
  (robots) => robots.errorMessage
);
