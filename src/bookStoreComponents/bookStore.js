import React, { useState } from 'react';
import Books from './Books';

const BookStore=(props)=>
{
    const [bookList,newList]=useState({
      books:[  {id:'1',book:'2 States',price:425,quantity:0},
        {id:'2',book:'Harry Potter',price:1025,quantity:0},
        {id:'3',book:'Twilight',price:925,quantity:0},
        {id:'4',book:'I too had a love story',price:825,quantity:0}]
       
    });
    const [total,newTotal]=useState(0);
    return(
        
        <div className="padding_cls">
            <h5>THE BOOKSTORE</h5>
            <Books bookList={bookList.books}></Books>
            <div className="card bg-primary">
                <div className="card-body">
                   <h5 className="total_cls">  Total Price : {total} </h5>
                </div>
            </div>
        </div>
    );
}
export default BookStore;