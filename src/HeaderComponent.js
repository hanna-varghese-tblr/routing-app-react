import React, { Component } from 'react';
import 
{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class HeaderComponent extends Component{
    render()
    {
        return(

            <nav class="navbar navbar-expand-sm bg-success">
                <ul class="navbar-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/categories" className="nav-link">Categories</Link></li>
                    <li className="nav-item"><Link to="/post" className="nav-link">Post</Link></li>
                    <li className="nav-item"><Link to="/add_category" className="nav-link">Add Category</Link></li>
                    <li className="nav-item"><Link to="/add_post" className="nav-link">Add Post</Link></li>
                </ul>
            </nav>

        )
    }
}