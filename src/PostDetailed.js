import React, { Component } from 'react';
import axios from 'axios';
import 
{
  Link
} from 'react-router-dom';
import './App.css';
export default class PostDetailed extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            id:this.props.match.params.id
        }    
    }
    componentDidMount()
    {
        let url_post='https://jsonplaceholder.typicode.com/posts/'+this.state.id;
        axios.get(url_post)
        .then(res=>{
            this.setState({
                body:res.data.body,
                title : res.data.title
            })
            console.log(res.data);
          },(error) => {
            console.log(error);
          });
    }

    render()
    {
        return(
            <div className="padding_cls">
                <h6 classname="page-title">Post ID : {this.state.id}</h6>
                <div className="card" > 
                    <div className="card-body"><p className="post_title">{this.state.title}</p>
                        <p>{this.state.body}</p>
                    </div>
                </div>
                <div>
                    <Link to="/categories" className="btn btn-danger">Back to categories</Link>
                </div>
            </div>
        );

    }
}