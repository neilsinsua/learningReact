import React from "react";
import "./App.css";
import { Component } from "react";
import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { name: "Neil", age: 25 },
      { name: "Eva", age: 22 },
      { name: "Shirley", age: 58 },
      { name: "Hadrian", age: 64 },
    ],
    showPeople: false,
  };

  togglePeople = () => {
    this.setState({
      showPeople: !this.state.showPeople,
    });
  };

  delPeople = (index) => {
    const people = this.state.people;
    people.splice(index, 1);
    this.setState({
      people,
    });
  };

  render() {
    console.log(this.state.people);

    let person = null;

    if (this.state.showPeople) {
      person = (
        <div>
          {this.state.people.map((el, index) => {
            return (
              <Person
                name={el.name}
                age={el.age}
                click={this.delPeople.bind(this, index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <button onClick={this.togglePeople}>Show people</button>
        {person}
      </div>
    );
  }
}

export default App;
