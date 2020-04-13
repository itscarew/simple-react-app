import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "./components/cards/cardlists";
import SearchBox from "./components/search/searchbox";
import Scroll from "./components/scroll/scroll";
import ErrorBoundary from "./components/errorBoundary/errBoundary";
import { FetchRobotsAsync } from "./redux/robots/robotsAction";
import { setSearchField } from "./redux/search/searchActions";

import {
  selectRobots,
  selectSearchField,
  selectErrorMessage,
} from "./redux/robots/robotSelector";

class App extends Component {
  componentDidMount() {
    this.props.setRobots();
  }

  render() {
    const {
      robots,
      searchField,
      handleSearch,
      setFilteredRobots,
      errorMessage,
    } = this.props;
    const errorLoading = (
      <div className="bg-blue-900  p-8 text-center min-h-screen ">
        <div className="special text-center text-3xl ">
          {!errorMessage ? "Loading ...." : "Ooops...seems something's broken"}
        </div>
      </div>
    );

    if (robots.length === 0) {
      return errorLoading;
    } else
      return (
        <div className="bg-blue-900  p-8 text-center min-h-screen ">
          <h1 className="special text-center text-5xl"> Robot Friends </h1>
          <SearchBox handleSearch={handleSearch} searchValue={searchField} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={setFilteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
  robots: selectRobots(state),
  setFilteredRobots: state.robots.robots.filter((robot) =>
    robot.name.toLowerCase().includes(state.search.searchField.toLowerCase())
  ),
  searchField: selectSearchField(state),
  errorMessage: selectErrorMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  setRobots: (robots) => dispatch(FetchRobotsAsync(robots)),
  handleSearch: (event) => dispatch(setSearchField(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
