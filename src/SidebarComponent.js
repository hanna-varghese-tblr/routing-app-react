import React, { Component } from 'react';
import 
{
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
export default class SidebarComponent extends Component{
    render()
    {
        return(
            <div className="d-flex" id="wrapper">
                <div className="bg-light border-right" id="sidebar-wrapper">
                    <div className="list-group list-group-flush">
                        <Link to="/add_category" className="list-group-item list-group-item-action bg-light">Add Category</Link>
                        <Link to="/add_post" className="list-group-item list-group-item-action bg-light">Add Post</Link>
                       
                    </div>
                </div>
             </div>
       
        )
    }
}