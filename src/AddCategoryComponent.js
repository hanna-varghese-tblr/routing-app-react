import React, { Component } from 'react';

export default class AddCategoryComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            title:'',
            desc:''
        };
        this.changeEvent=this.changeEvent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.descChange=this.descChange.bind(this);
    }
    //When there are many inputs use the method in the addpostcomponent
    changeEvent(e)
    {
        this.setState({
            title:e.target.value
        })
    }
    descChange(e)
    {
        this.setState({
            desc:e.target.value
        })
    }
    handleSubmit(e)
    {
        alert("The category title is set to : "+this.state.title+" The description is : "+this.state.desc);
    }

    render()
    {
        return(
            <div className="padding_cls"> 
                <h4>Add Category</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Category Title</label>
                    <input type="text" className="form-control form-element" value={this.state.title} onChange={this.changeEvent}></input>
                    <label>Category Desc</label>
                    <textarea value={this.state.desc} onChange={this.descChange} className="form-control form-element"></textarea>
                    <input type="submit" className="btn btn-primary margin-button"></input>
                </form>
            </div>
        )
    }
}