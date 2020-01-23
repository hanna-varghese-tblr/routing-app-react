import React from 'react';
import logo from './logo.svg';
import './App.css';
import 
{
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import CategoryComponent from './CategoryComponent';
import PostComponent from './PostComponent';
import HeaderComponent from './HeaderComponent';
import NotFoundComponent from './NotFoundComponent';
import AdminComponent from './AdminComponent';
import AddCategoryComponent from './AddCategoryComponent';
import AddPostComponent from './AddPostComponent';
import TimerComponent from './TimerComponent';
import VoteComponent from './VoteComponent';

function App() {
  return (
    <div className="App_main">
      <header>
        <Router>
          <HeaderComponent></HeaderComponent>
          <Switch>
              <Route exact path="/" component={PostComponent}></Route>
              <Route exact path="/categories" component={CategoryComponent}></Route>
              <Route exact path="/post" component={PostComponent}></Route>
              <Route exact path="/add_post" component={AddPostComponent}></Route>
              <Route exact path="/add_category" component={AddCategoryComponent}></Route>
              <Route exact path="/vote" component={VoteComponent}></Route>
              <Route component={NotFoundComponent}></Route>
          </Switch>
        </Router>
        <div className="App_custom">
          <TimerComponent></TimerComponent>
        </div>
      </header>
    </div>
  );
}

export default App;
