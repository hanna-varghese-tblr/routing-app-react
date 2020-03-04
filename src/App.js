import React from 'react';
import './App.css';
import 
{
  BrowserRouter as Router,
} from 'react-router-dom';


import HeaderComponent from './HeaderComponent';
import TimerComponent from './TimerComponent';

import {connect} from 'react-redux';

function App() {
  return (
    <div className="App_main">
      <header>
        <Router>
          <HeaderComponent></HeaderComponent>
        </Router>
        <div className="App_custom">
          <TimerComponent></TimerComponent>
        </div>
      
      </header>
    </div>
  );
}
const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(App);
