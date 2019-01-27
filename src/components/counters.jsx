//List of counters
import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
          //this value={counter.value} props for the other component
          //what ever the attributes here is the part of the props and input to the component.we can't acces the state of the component
          //we can't change the input to this component
        ))}
        {/* <Counter />
        <Counter />
        <Counter />
        <Counter /> */}
        {/*Insted of hard coding counters in the above we can do dynamically using the arrays */}
      </div>
    );
  }
}

export default Counters;
