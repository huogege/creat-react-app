import React from 'react';
class Clock extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            value: 1
        }
    }
    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick()
        }
        ,1000)
    }
    componentWillUnmount() {
        console.log(2)                 //当组件销毁的时候，清除定时器，切换路由会销毁
        clearInterval(this.timerId)
    }
    tick() {
        const num = this.state.value + 1
        this.setState({
            date: new Date(),
            value: num
        })
    }
    render() {
        return(
            <div>
                <div>
                    {this.state.date.toLocaleTimeString()}---
                    {this.state.value}
                </div>
            </div>
        )
    }
}
export default Clock