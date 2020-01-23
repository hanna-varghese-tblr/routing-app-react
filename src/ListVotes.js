import React, { Component } from 'react';
export default class ListVotes extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return (
            {this.props.VoteItems.map((votes) => <div className="card"> <div className="card-body">{votes}</div></div>)}
                
        )
    }
}