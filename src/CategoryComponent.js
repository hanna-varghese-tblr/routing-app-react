import React, { Component } from 'react';

export default class CategoryComponent extends Component{
    constructor(props)
    {
        super(props)
        this.clickDetected=this.clickDetected.bind(this);
    }
    clickDetected()
    {
        alert("Here is the promised alert");
    }
    render()
    {
        return(
            <div className="padding_cls">
            <h2 className="padding_cls">Hai Welcome to category component</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 
                1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book. It has survived not only five centuries, but 
                also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets 
                containing Lorem Ipsum passages, and more recently with desktop publishing 
                software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <button className="btn btn-danger" onClick={this.clickDetected}>Click for Alert</button>
                
            </div>
        )
    }
}



