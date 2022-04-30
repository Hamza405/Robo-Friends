import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield);
    });
    if (this.state.robots.length === 0) {
      <h1 className="text-6xl text-red-800 text-center p-4">Loading...</h1>;
    } else {
      return (
        <div>
          <h1 className="text-6xl text-red-800 text-center pt-2">
            Robo Friend
          </h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
