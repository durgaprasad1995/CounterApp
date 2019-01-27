import React, { Component } from "react";
// import logo from './logo.svg';
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  constructor(props) {
    super(props);
    console.log("App- Constructor");
    //constructor is the right place to insialize the properties in the class
  }
  componentDidMount() {
    //this is the perfect place to make ajax calls and to get the data from the server
    console.log("App-Mounted");
  }
  handleIncrement = counter => {
    // console.log("Incremented", counter);
    const counters = [...this.state.counters]; //here we are cloing the array.This object in this array is the samee that is having in the cloing array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };

    counters[index].value++; //this is directly going to modify the counter array
    // console.log(this.state.counters[0]);
    this.setState({ counters });
  };
  handleDelete = counterId => {
    // console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
    //this will get the new array of counters
  };
  render() {
    console.log("App- Renderd");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
