import React, { Component } from 'react';
import SidebarComponent from './SidebarComponent';
import 
{
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import NotFoundComponent from './NotFoundComponent';
import AddCategoryComponent from './AddCategoryComponent';
import AddPostComponent from './AddPostComponent';
export default class AdminComponent extends Component{
    render()
    {
        return(
            <div>
               <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <SidebarComponent></SidebarComponent>
                        </div>
                        <div className="col-md-10">
                            <h2 className="padding_cls">Hai Welcome to admin component</h2>
                        </div>
                    </div>
               </div>
          
            <Router>
                <Switch>
                    <Route exact path="/add_category" component={AddCategoryComponent}></Route>
                    <Route exact path="/add_post" component={AddPostComponent}></Route>
                    <Route component={NotFoundComponent}></Route>
                </Switch>
            </Router>
              
            </div>
        )
    }
}