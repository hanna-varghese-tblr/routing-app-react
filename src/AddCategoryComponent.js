import React, { Component } from 'react';
import ShowList from './ShowList';

export default class AddCategoryComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            title:'',
            desc:'',
            CategoryList:["Travel","Technology","Lifestyle"]
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
        this.setState({
          
            CategoryList: this.state.CategoryList.concat([this.state.title])
           
        })
        this.setState({
            title:'',
            desc :''
        })
      /*  alert("The category title is set to : "+this.state.title+" The description is : "+this.state.desc);*/
    }

    render()
    {
        return(
            <div>
                <div className="padding_cls"> 
                    <h4>Add Category</h4>
                    <form>
                        <label>Category Title</label>
                        <input type="text" className="form-control form-element" value={this.state.title} onChange={this.changeEvent}></input>
                        <label>Category Desc</label>
                        <textarea value={this.state.desc} onChange={this.descChange} className="form-control form-element"></textarea>
                        <input type="button"  onClick={this.handleSubmit} className="btn btn-primary margin-button" value="Submit"></input>
                    </form>
                </div>
                <div className="padding_cls"> 
                    <ShowList names={this.state.CategoryList}></ShowList>
                </div>
            </div>
        )
    }
}
