import "./App.css";

import React, { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      unicorns: [],
      searchField: ""
    };

   
  }
 
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ unicorns: users }));
  }
  // the arrow function allows us to avoid having to call bind since it will reference the context from where it was called.
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }
  render() {
    const { unicorns, searchField } = this.state;
    const filteredUnicorns = unicorns.filter(unicorn =>
      unicorn.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className='header'>UnicornLand Cats</h1>
        <SearchBox placeholder="Search a UnicornLand cat"  handleChange={this.handleChange}/>
        <CardList unicorns={filteredUnicorns} />
      </div>
    );
  }
}

export default App;
