import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Calculator from './component/Calculator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.Age=20;
    this.name="Nuk";
    this.state ={name:"Nuk",Age:"20"};
  }
  getval(){
    return "getVal";
  }
  onClick(){
    this.setState({name: "Justin"});
  }
  setAge(age){
    const Age = age.target.value;
    this.setState({Age:Age})
  }
  render(){
    const myname = "Nuk";
    return(
      <div>
      <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      </div>
      <div>
      <div>My name is{this.state.name}</div>
      <div>Age: {this.state.Age}</div>
      <button onClick={this.onClick.bind(this)}>Click Me Please</button>
      <input onChange={this.setAge.bind(this)} />
      </div>
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to relode.
      </p>
      </div>
      <div>Hello {myname} </div>
      <div>Calculate 3+2 = {3+2}</div>
      <div>Call getval method : {this.getval()}</div>
      <div>Age:{this.Age}</div>
      <div>name:{this.name}</div>

      <div><Header/></div>
      <div><Footer/></div>
      <div><Calculator/></div>
      </div>
    );
  }
}

export default App;
