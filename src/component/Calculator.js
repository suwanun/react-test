import React from 'react';

class Calculator extends React.Component {
  constructor(){
    super();
    this.state ={num1 : 0 ,num2 : 0};
  }
  getVal(){
    return "getVal";
  }
  setAge(a){
    const num1 = a.target.value;
    this.setState({num1 : num1})
  }
  setage(b){
    const num2 = b.target.value;
    this.setState({num2 : num2})
  }
  render() {
    return(
      <div>
      <h1> This is Calculator </h1>
      <div>Number 1 = {this.state.num1}</div>
      <div>Number 2 = {this.state.num2}</div>
      <div>Sum = {this.state.num1 + this.state.num2}</div>
      <div><input onChange={this.setAge.bind(this)} /></div>
      <div><input onChange={this.setage.bind(this)} /></div>
      </div>
    );
  }
}
export default Calculator;
