import React from 'react'
export default class Test1 extends React.Component{
    constructor(props) {
        super(props)
    }
    componentWillUpdate(nextProps, nextState) {
        console.log(this.props)
        console.log(nextProps)
        console.log('test1 updated')
        
    }
    
    render() {
        return (
            <div>
                <p>{this.props.message}</p>
            </div>
        )
    }
}