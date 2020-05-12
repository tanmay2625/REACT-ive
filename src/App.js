import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom"
import Main from './components/MainComponents'
import {ConfigureStore} from './redux/ConfigureStore'
import {Provider} from 'react-redux'
import './App.css';

const store=ConfigureStore();

class App extends Component {

  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
  
}

export default App;
