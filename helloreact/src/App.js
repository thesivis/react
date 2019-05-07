import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyButton extends Component{

  render(){
    return (
      <button 
        onClick={
          () => this.props.handleClick(this.props.label)
        }>
          {this.props.label}
      </button>
    )
  }

}

class MyLabel extends Component {
  render(){
    return (<p>Clique no: {this.props.text}</p>)
  }
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      labelText : "",
    };
  }

  setLabelText = (labelText) => {
    this.setState({ labelText : labelText })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <MyLabel text={this.state.labelText} />
        <MyButton label="Botão 1" valor={1} handleClick={this.setLabelText}/>
        <MyButton label="Botão 2"  handleClick={this.setLabelText}/>
        <MyButton label="Botão 3"  handleClick={this.setLabelText}/>
        <MyButton label="Botão 4"  handleClick={this.setLabelText}/>
      </div>
    );
  }
}

export default App;
