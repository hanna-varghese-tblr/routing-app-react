import React ,{ Component }from 'react';

export default class Contacts extends Component
{
    /*constructor(props)
    {
        super(props)

    }*/
    HandleClick(i)
    {
        alert("Clicked on ID : "+i);
    }
    render()
    {
        return(
            <div>
                {this.props.contacts.map(cnt=><div className="card" key={cnt.id} onClick={this.HandleClick.bind(this,cnt.id)}> 
                    <div className="card-body">{cnt.name}
                        <p>{cnt.email}</p>
                    </div>
                </div>
                )}
            </div>
        )
    }
} 