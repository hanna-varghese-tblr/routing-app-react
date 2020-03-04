import React, { Component } from 'react';

export default class BookStoreCls extends Component
{
    constructor(props)
    {
        super(props);
        this.state=({
            books:[  {id:'1',book:'2 States',price:425,quantity:0},
            {id:'2',book:'Harry Potter',price:1025,quantity:0},
            {id:'3',book:'Twilight',price:925,quantity:0},
            {id:'4',book:'I too had a love story',price:825,quantity:0}],
            total:0
        });
    } 
    RemoveBook(i,bk)
    {
        let data=[this.state.books];
        let price=bk.price;
        let newprice=this.state.total-price;

     //   let quantity_item=bk.quantity;

        let changeQuantity=data[0][i].quantity--;
       // let ref=data[0][i].quantity;
        if(changeQuantity>0)
        {
            this.setState({
                ref:changeQuantity,
                total:newprice
            })
        }
        else
        {
            this.setState({
                ref:0,
                total:newprice
            })
        }
       
    }

    AddBook(i,bk)
    {
        let data=[this.state.books];
        let price=bk.price;
        let newprice=price+this.state.total;

        

        let changeQuantity=data[0][i].quantity++;
     

        this.setState({
            ref:changeQuantity,
            total:newprice
        })
    }
    render(){
        return(
            <div className="padding_cls">
                <h5>THE BOOKSTORE</h5>
                {this.state.books.map((books,i)=>
                    <div key={i} className="card">
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
                                        <button   className="btn btn-danger" onClick={this.RemoveBook.bind(this,i,books)}>
                                            -
                                        </button>
                                    </div>
                                    <div className="col-md-2">
                                        <input type="text" className="form-control item_quantity" readOnly value={books.quantity} ></input>
                                    </div>
                                    <div className="col-md-1>">
                                        <button  className="btn btn-success" onClick={this.AddBook.bind(this,i,books)}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                )}
                <div className="card bg-primary">
                    <div className="card-body">
                    <h5 className="total_cls">  Total Price : {this.state.total} </h5>
                    </div>
                </div>
            </div>
        );
    };
   
}
