import React,{Component} from 'react';

export default class ShowList extends Component
{
   /* constructor(props)
    {
        super(props)   
    }*/

    render() {
        return (
          <div>
            <h5 className="left_cls">The categories Are :</h5>
            <ul>
              {this.props.names.map((category) => <li className="left_cls">{category}</li>)}
            </ul>
          </div>
        )
      }
} 