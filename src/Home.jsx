import * as React from "react";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: props.name };
  }
  clickfn = () => {
    alert("hi");
    this.setState({ color: "poda dei" });
    this.props.function();
  };
  render() {
    var te = this.props.name;
    return (
      <div>
        <h2>
          {" "}
          Hi, I am a Car! {this.state.color} {te}
        </h2>
        <button onClick={this.clickfn}> hiii</button>
        <button onClick={this.props.function}> AppCompcall</button>
      </div>
    );
  }
}

export const NamedExports = (props) => {
  return <h1 id="hii">hiiiiii {props.name}</h1>;
};

export default Home;
