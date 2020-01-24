import React, { Component } from 'react';
import Greetings from './Greetings'; 
import Button from './Button';
export default class CheckComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            isShown:true
        }
    }
    render()
    {
      return(  <div>
                    {this.state.isShown?<Greetings greetings="Hello,Welcome"></Greetings>:null}
                    <Button></Button>
                </div>
      )
    }
}