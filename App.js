import React, {Component} from 'react';
import Rect from './Rect';
import './App.css';

class App extends Component {

  render(){
    return <div>
            <Rect x="50" y="50" w="150" h="150" c="cyan" r="10" />
            <Rect x="150" y="100" w="150" h="150" c="magenta" r="30" />
            <Rect x="100" y="150" w="150" h="150" c="black" r="50" />
    </div>;
  }
}

export default App;
