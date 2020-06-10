import React from 'react'
export default class Test2 extends React.Component{
    constructor(props) {
        super(props)
    }
    componentWillUpdate(nextProps, nextState) {
        console.log(this.props)
        console.log(nextProps)
        console.log('test2 updated')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps)
        console.log(this.props)
        return nextProps.message !== this.props.message
        
    }
    
    render() {
        return (
            <div>
                <p>{this.props.message}</p>
            </div>
        )
    }
}