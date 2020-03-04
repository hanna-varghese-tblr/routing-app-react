import React, { useState } from 'react';
import '../App.css';
const Books=(props)=>{

    const RemoveBook=(bk)=>
    {
        console.log(bk);
    }

    const AddBook=(bk)=>
    {
        console.log(bk);
        console.log("Add Clicked");
        let price=bk.price;
       // let newPrice=price+props.total;
      //  const newTotal=useState(newPrice);
    }

    const [btnParam,newBtn]=useState({
        remBtn:{btncls:'btn btn-danger',btnText:'-'},
        addBtn:{btncls:'btn btn-success',btnText:'+'}
    });

    return(
        <div>
            {props.bookList.map((books)=>
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
                                    <button   className="btn btn-danger" onClick={e=>RemoveBook(books)}>
                                        -
                                    </button>
                                </div>
                                <div className="col-md-2">
                                    <input type="text" className="form-control item_quantity" readOnly value={books.quantity}></input>
                                </div>
                                <div className="col-md-1>">
                                    <button  className="btn btn-success" onClick={e=>AddBook(books)}>
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
export default Books;