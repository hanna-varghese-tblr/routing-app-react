import React, { Component } from 'react';
import './App.css';
import 
{
  Route,
  Switch
} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Dummy from './Common/Dummy';
import CategoryComponent from './CategoryComponent';
import PostComponent from './PostComponent';
import NotFoundComponent from './NotFoundComponent';
import AddCategoryComponent from './AddCategoryComponent';
import AddPostComponent from './AddPostComponent';
import VoteComponent from './VoteComponent';
import BookStore from './bookStoreComponents/bookStore';
import HomeComponent from './HomeComponent';
import BookStoreCls from './bookStoreComponents/BookStoreCls';
import BookComponentFn from './bookStoreComponents/BookComponentFn';
import Counter from './Counter.js';
import DemoComponent from './DemoComponent';
import PostDetailed from './PostDetailed';
export default class HeaderComponent extends Component{
    render()
    {
        return(
            <Dummy>
                <nav class="navbar navbar-expand-sm bg-success">
                    <ul class="navbar-nav">
                        <li className="nav-item"><NavLink  activeClassName="current" to="/home" className="nav-link">Home</NavLink></li>
                        <li className="nav-item"><NavLink  activeClassName="current" to="/categories" className="nav-link">Categories</NavLink></li>
                        <li className="nav-item"><NavLink  activeClassName="current" to="/post" className="nav-link">Post</NavLink></li>
                        <li className="nav-item"><NavLink  activeClassName="current" to="/add_category" className="nav-link">Add Category</NavLink></li>
                        <li className="nav-item"><NavLink  activeClassName="current" to="/add_post" className="nav-link">Add Post</NavLink></li>
                        <li className="nav-item"><NavLink  activeClassName="current" to="/vote" className="nav-link" >Vote</NavLink></li>
                        <li className="nav-item"><NavLink  activeClassName="current" to="/bookstore_cls" className="nav-link">Bookstore</NavLink></li>
                        <li className="nav-item"><NavLink  activeClassName="current" to="/counter" className="nav-link">Counter</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/home" component={HomeComponent}></Route>
                    <Route exact path="/categories" component={CategoryComponent}></Route>
                    <Route exact path="/post" component={PostComponent}></Route>
                    <Route exact path="/add_post" component={AddPostComponent}></Route>
                    <Route exact path="/add_category" component={AddCategoryComponent}></Route>
                    <Route exact path="/vote" component={VoteComponent}></Route>
                    <Route exact path="/bookstore" component={BookStore}></Route>
                    <Route exact path="/bookstore_cls" component={BookStoreCls}></Route>
                    <Route exact path="/bookdemo" component={BookComponentFn}></Route>
                    <Route exact path="/counter" component={Counter}></Route>
                    <Route exact path="/demo" component={DemoComponent}></Route>
                    <Route exact path="/category/:id" component={PostDetailed} />
                    <Route component={NotFoundComponent}></Route>
                </Switch>
            </Dummy>
        )
    }
}