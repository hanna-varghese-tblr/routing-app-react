import React, { Component } from 'react';
import './App.css';
import 
{
  Link
} from 'react-router-dom';
export default class ListPost extends Component
{
    render(){
        return(
            <div>
                {this.props.disp.map(posts=><div className="card" key={posts.id} > 
                    <div className="card-body"><p className="post_title">{posts.title}</p>
                        <p>{posts.body}</p><br>
                        </br>
                        <Link to={`category/${posts.id}`} className="btn btn-info">View</Link>
                            </div>
                        </div>)}
                </div>
        );
    };
}