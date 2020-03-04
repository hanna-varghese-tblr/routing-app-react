import React, {  Component } from 'react';
import '../App.css';
export default class BooksCls extends Component
{
    constructor(props)
    {
        super(props);
    }
    
    RemoveBook(bk)
    {
      
    }

    AddBook(bk)
    {
        let id=bk.id;
        let price=bk.price;
        let newprice=price+this.state.total;
        let quantity_item=bk.quantity;
        let new_quantity=quantity_item+1;
        this.state.total=newprice;
        this.state.book[id].quantity=new_quantity;
    }
    

    render(){
        return(
            <div>
                {this.props.bookList.map((books)=>
                    <div key={books.id} className="card">
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        {books.book} 
                                    </div>
                                    <div className="col-md-2">
                                       Rs {books.price} 
                                    </div>
                                    <div className="col-md-1">
                                        <button   className="btn btn-danger" onClick={this.RemoveBook.bind(this)}>
                                            -
                                        </button>
                                    </div>
                                    <div className="col-md-2">
                                        <input type="text" className="form-control item_quantity" readOnly value={books.quantity}></input>
                                    </div>
                                    <div className="col-md-1>">
                                        <button  className="btn btn-success" onClick={this.AddBook.bind(this)}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                )}
            </div>
        );
    }

    
}
