import React from "react";
import "./App.css";
import { Component } from "react";
import Person from "./Person/Person";

class App extends Component {
  state = {
    people: [
      { id: 0, name: "Neil", age: 25 },
      { id: 1, name: "Eva", age: 22 },
      { id: 2, name: "Shirley", age: 58 },
      { id: 3, name: "Hadrian", age: 64 },
    ],
    showPeople: false,
  };

  togglePeople = () => {
    this.setState({
      showPeople: !this.state.showPeople,
    });
  };

  changeName = (event, id) => {
    //index of person with name change
    const personIndex = this.state.people.findIndex((el) => el.id === id);
    //copy of person with name change
    const personCopy = { ...this.state.people[personIndex] };
    //change name of copy
    personCopy.name = event.target.value;
    //copy of people array
    const peopleCopy = [...this.state.people];
    // update array copy at index
    peopleCopy[personIndex] = personCopy;
    this.setState({
      people: peopleCopy,
    });
  };

  delPeople = (index) => {
    const people2 = [...this.state.people];
    people2.splice(index, 1);
    this.setState({
      people: people2,
    });
  };

  render() {
    let person = null;

    if (this.state.showPeople) {
      person = (
        <div>
          {this.state.people.map((el, index) => {
            return (
              <Person
                /**==> UI */
                name={el.name}
                age={el.age}
                key={el.id}
                /**<== UI */
                click={this.delPeople.bind(this, index)}
                change={(event) => this.changeName(event, el.id)}
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
