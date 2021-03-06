import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

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
    const { robots, searchfield } = this.state;
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield);
    });
    return !robots.length ? (
      <div>
        <h1 className="text-6xl text-red-800 text-center p-4">Loading...</h1>
      </div>
    ) : (
      <div>
        <h1 className="text-6xl text-red-800 text-center pt-2">Robo Friend</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
