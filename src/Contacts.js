import React ,{ Component }from 'react';

export default class Contacts extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div>
                {this.props.contacts.map(cnt=><div className="card"> 
                    <div className="card-body">{cnt.name}</div>
                </div>
                )}
            </div>
        )
    }
} 