import React, { Component } from 'react';

export default class Button extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            isShown:true
        }
        this.toogleButton=this.toogleButton.bind(this);
    }
    toogleButton(e)
    {
        if(this.state.isShown==true)
            var  change=false;
        else 
            var change=false;
        this.setState({
            isShown:change
        })
    }
    render()
    {
      return( <button onClick={this.toogleButton} className="btn btn-info">Show/Hide Greetings</button>)
    }
}