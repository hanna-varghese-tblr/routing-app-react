import React, { Component } from 'react';

export default class VoteComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            VoteItems:[
                    {category:"Travel",votes:0},
                    {category:"Lifesyle",votes:0},
                    {category:"Books",votes:0},
                    {category:"Technology",votes:0},
                    {category:"Entertainment",votes:0}
            ]
        }
    }

    handleClick(i)
    {
        let items_vote=[this.state.VoteItems];
       // let curr=items_vote[0][i].votes;
        let new_num=items_vote[0][i].votes++;
       // let ref=items_vote[0][i].votes;
        this.setState({
            ref:new_num
        })
    }

    render()
    {
       /* <ListVotes VoteItems={this.state.VoteItems}></ListVotes>*/
        return (
            <div className="padding_cls">
                <h4>Vote For Your Favorite Category</h4>
                {
                    this.state.VoteItems.map((items,i)=>
                    
                        <div key={i} className="card" onClick={this.handleClick.bind(this,i)}> 
                            <div className="card-body bg-info">
                                {items.category} <br></br> 
                                {items.votes}
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}