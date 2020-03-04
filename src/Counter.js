import React,{ Component }  from 'react';
import {connect} from 'react-redux';
import './App.css';

class Counter extends Component
{
    increment=()=>
    {
        this.props.dispatch({type: "INCREMENT"});
    }
    decrement=()=>
    {
        this.props.dispatch({type: "DECREMENT"});
    }
    render(){
        return(
            <div>
                <h4>Counter using redux</h4>
                <div className="inline_cls">
                    <button className="btn btn-warning" onClick={this.decrement}>-</button>
                </div>
                <div className="inline_cls">
                    {this.props.count  }
                </div> 
                <div className="inline_cls">
                    <button className="btn btn-info" onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state)
{
        return { count: state.count}
}

export default connect(mapStateToProps) (Counter);