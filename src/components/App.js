import React, { Component } from 'react'
import './App.css'
import Button from './Button';

class App extends Component {
  state = {  
    operation: "",
  }

  handleClick = (number) =>{
      this.setState({
        operation: this.state.operation + number
      })
  }

  handleClickResult = () =>{
    try{
      const result = eval((this.state.operation).toString())
      this.setState({
        operation: result
      })
    }catch(err){
      this.setState({
        operation: "error"
      })
    }
  }

  handleClickReset = () =>{
    this.setState({
      operation: ""
    })
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <button onClick={this.handleClickReset} className="reset">RESET</button>
          <div className="result">
            {this.state.operation}
          </div>
          <div className="fourthRow">
            <Button click={this.handleClick} title="7"/>
            <Button click={this.handleClick} title="8"/>
            <Button click={this.handleClick} title="9"/>
            <Button click={this.handleClick} title="/"/>
          </div>
          <div className="thirdRow">
            <Button click={this.handleClick} title="4"/>
            <Button click={this.handleClick} title="5"/>
            <Button click={this.handleClick} title="6"/>
            <Button click={this.handleClick} title="*"/>
          </div>
          <div className="secondRow">
            <Button click={this.handleClick} title="1"/>
            <Button click={this.handleClick} title="2"/>
            <Button click={this.handleClick} title="3"/>
            <Button click={this.handleClick} title="-"/>
          </div>
          <div className="firstRow">
            <Button click={this.handleClick} title="0"/>
            <Button click={this.handleClick} title="."/>
            <Button click={this.handleClickResult} title="="/>
            <Button click={this.handleClick} title="+"/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;