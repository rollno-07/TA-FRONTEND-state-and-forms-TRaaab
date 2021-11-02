import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      counter:0,
      steps:0,
      maxValue:0
      
    }
  }
   handlestep5=()=>{
    
      this.setState({
        steps:this.state.steps*0+5
      })
   }
   handlestep10=()=>{
    
    this.setState({
      steps:this.state.steps*0+10
    })
 }
 handlestep15=()=>{
    
  this.setState({
    steps:this.state.steps*0+15
  })
}
    
  handleIncreament=()=>{
    
    if(this.state.steps===5){
      console.log(this.state.steps)
      this.setState({
        counter:this.state.counter*5
      })
    }
    if(this.state.steps===10){
      console.log(this.state.steps)
      this.setState({
        counter:this.state.counter+10
      })
    }
    if(this.state.steps===15){
      console.log(this.state.steps)
      this.setState({
        counter:this.state.counter+15
      })
    }
  //   else{
  //   this.setState({
  //     counter:this.state.counter+1
  //   })
  // }
  }
  handleDecreament=()=>{
    if(this.state.steps===5){
      this.setState({
        counter:this.state.counter-5
      })
    }
    if(this.state.steps===10){
      this.setState({
        counter:this.state.counter-10
      })
    }
    if(this.state.steps===15){
      this.setState({
        counter:this.state.counter-15
      })
    }
    else{
    this.setState({
      counter:this.state.counter-1
    })
  }
  }
  handleReset=()=>{
    this.setState({
      counter:0,
      steps:0
      
    })
  }
  
  
  render()
{  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <h2>{this.state.counter}</h2>
        <div>
          <h1>Steps</h1>
          <span>
            <button onClick={this.handlestep5}>5</button>
            <button onClick={this.handlestep10}>10</button>
            <button onClick={this.handlestep15}>15</button>
          </span>
          <h1>Max Value</h1>
          <span>
          <button>15</button>
            <button>100</button>
            <button>200</button>
          </span>
        </div>
        
       <span>
       <button onClick={this.handleIncreament}>Increament</button>
        <button onClick={this.handleDecreament}>Decreament</button>
        <button onClick={this.handleReset}>Reset</button>
        </span> 
      </header>
      
    </div>
  );
}
}

export default App;
