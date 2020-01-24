import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
export default class AddPostComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            title:'',
            desc:'',
            category:'',
            author:''
        };
        this.validator=new SimpleReactValidator();
        this.changeInput=this.changeInput.bind(this);
    }
    
    changeInput(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    handleSubmit(e)
    {
        console.log("In submit");
        if (this.validator.allValid()) {
            alert('Successfully submitted');
        } 
        else {
            this.validator.showMessages();
            alert("failed");
            this.forceUpdate();
        }
       // alert("The category title is set to : "+this.state.title+" The description is : "+this.state.desc);
    }
    render()
    {
        return(
           <div className="padding_cls">
                <h4>Add Post</h4>
                <form >
                    <label>Post Title</label>
                    <input type="text" name="title" className="form-control form-element" value={this.state.title} onChange={this.changeInput}></input>
                    { this.validator.message('title', this.state.title, 'required') }
                   
                    <label>Post Author</label>
                    <input type="text" name="author" className="form-control form-element" value={this.state.author} onChange={this.changeInput}></input>
                    <label>Post Category</label>
                    <select name="category" className="form-control form-element" value={this.state.category} onChange={this.changeInput}>
                        <option value="">Select</option>
                        <option value="travel">Travel</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="technology">Technology</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
                    <label>Post Content</label>
                    <textarea name="desc" value={this.state.desc} onChange={this.changeInput} className="form-control form-element"></textarea>
                    <input type="button" className="btn btn-info margin-button" value="Submit" onClick={this.handleSubmit}></input>
                </form>
            </div>
        )
    }
}