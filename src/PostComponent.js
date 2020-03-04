import React, { Component } from 'react';
import Contacts from './Contacts';

export default class PostComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            contact:[]
        }
    }
    componentDidMount()
    {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then((data)=>
                {
                    this.setState({
                        contact:data
                    })
                }
            )
            .catch(console.log)
    }
    render()
    {
        return(
            <div className="padding_cls">
                <h4 className="padding_cls">Sample data from json:</h4>
                {
                    <Contacts contacts={this.state.contact}></Contacts>
                }
            </div>
        )
    }
}

