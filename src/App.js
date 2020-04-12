import React, { Component } from "react";
import CardList from "./components/cards/cardlists";
import SearchBox from "./components/search/searchbox";
import Scroll from "./components/scroll/scroll";
import ErrorBoundary from "./components/errorBoundary/errBoundary";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchValue: "",
      error: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ robots: json }))
      .catch((err) => {
        this.setState({ error: true });
      });
  }

  handleSearch = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { searchValue, robots, error } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    const errorLoading = (
      <div className="bg-blue-900  p-8 text-center min-h-screen ">
        <div className="special text-center text-3xl ">
          {" "}
          {!error ? "Loading ...." : "Ooops...seems something's broken"}{" "}
        </div>
      </div>
    );

    if (robots.length === 0) {
      return errorLoading;
    } else
      return (
        <div className="bg-blue-900  p-8 text-center min-h-screen ">
          <h1 className="special text-center text-5xl  "> Robot Friends </h1>
          <SearchBox
            handleSearch={this.handleSearch}
            searchValue={searchValue}
          />

          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default App;
