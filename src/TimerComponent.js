import React, { Component } from 'react';


export default class TimerComponent extends Component
{

    constructor(props)
    {
        super(props)
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }
    componentDidUpdate()
    {
       // alert("Updated");
    }
    componentWillUnmount()
    {
        clearInterval(this.tick);
    }
    tick()
    {
        this.setState({
            date:new Date()
        });
    }
    render()
    {
        return(
            <div className="timer_cls">{new Date().toLocaleTimeString()}</div>
        )
    }
}