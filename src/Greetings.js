import React,{ Component } from "react";

export default class Greetings extends Component
{
    constructor(props)
    {
        super(props)

    }
    render()
    {
        return(
            <div className="padding_cls">
                <h5>{this.props.greetings}</h5>
            </div>
        )
    }
}
