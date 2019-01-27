import React, { Component } from "react";
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax calls and get the new data from the sever
    }
  }
  componentWillUnmount() {
    console.log("Component un mount");
  }
  //   state = {
  //     value: this.props.counter.value, //insted seting this to 0 we can use props
  //     imageUrl: "https://picsum.photos/200",
  //     tags: ["tag1", "tag2", "tag3"]
  //   }; //state is a spl property in the react component
  //   constructor() {
  //     //if i am declaring without using super kewoard i am not able to access this
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //styles
  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold"
  //   };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no items</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  //   handleIncrement() {
  //     console.log("Increment clicked", this);
  //     //without binding the methos if i use this.state.count it will say state undefined
  //   }

  //using arrow function without using the constructor
  //   handleIncrement = () => {
  //     // console.log("Increment clicked", this);
  //     this.setState({
  //       value: this.state.value + 1
  //     });

  //     //without binding the methos if i use this.state.count it will say state undefined
  //   };
  render() {
    console.log("props", this.props);
    //here we are taking the props values from the counters
    return (
      //   <React.Fragment>
      <div>
        {/* {this.props.children} */}
        {/* <span>{this.state.count}</span> */}
        {/* <span>{2 + 2}</span> */}
        {/* <img src={this.state.imageUrl} alt="Text" /> */}
        {/*Here we are setting the attribute */}
        {/* <span style={this.styles} className="badge badge-primary m-2">
          {" "}
          {this.formatCount()}
        </span> */}
        <span className={this.getBageClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {/* passing the arguments to the events methos we can use like this onClick={()=>this.handleIncremnt(product)} */}
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        {/* {this.state.tags.length === 0 && "Please add the tags"}{" "} */}
        {/*This will render when  ther is no items in the array.It will work like boolen first one true then it will display next of that value */}
        {/* {this.renderTags()} */}
      </div>
      //   </React.Fragment>
    );
  }
  getBageClass() {
    let classes = "badge m-2 badge-";
    // classes += this.state.value === 0 ? "warning" : "primary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes;
  }
  //ctrl+shift+R to refractor the code in the one method
  formatCount() {
    //object destructring
    const { value } = this.props.counter; //here we are picking the count property and storing it into the count const

    // const { value } = this.state; //here we are picking the count property and storing it into the count const
    return value === 0 ? "Zero" : value; //we can return a JSX also here  changer "Zero"==><h1>Zero</h1>
  }
}

export default Counter;
