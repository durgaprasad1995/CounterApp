import React, { Component } from "react";
//statles functional component
//short cut code sfc
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      NavBar{" "}
      <span className="badage-pill badge-secondary">{totalCounters}</span>
      <a className="navbar-brand" href="#" />
    </nav>
  );
};
// class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         NavBar{" "}
//         <span className="badage-pill badge-secondary">
//           {this.props.totalCounters}
//         </span>
//         <a className="navbar-brand" href="#" />
//       </nav>
//     );
//   }
// }
// let a = 5;
// var b = a;
// a++;
// console.log("aaaaa", a);
// console.log("bbbb", b);
// console.log("a+++++", a);

// var b = 5;
// console.log("b+++", b);
// ++b;
// console.log("b+++", b);

export default NavBar;
