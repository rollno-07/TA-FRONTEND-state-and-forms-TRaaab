import logo from './logo.svg';
import Header from './header'

import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>hello world {props.name}</h1>
      <Header/>
    </div>
  );
}

export default App;
