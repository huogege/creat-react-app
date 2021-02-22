import React from 'react'

import {connect} from 'react-redux'
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        add: () => {
            dispatch({type: 'add2'})
        },
    }
}
const mapStateToProps = (state) => {
    return {
        num: state.reducer2.num,
        num2: state.reducer1.num,
    }
}
const Page2RR =(props) => {
    return(<div>
        <p>page2,use,react-redux</p>
        <div>{props.num}</div>
        <div>{props.num2}</div>
        <button onClick={() => {
            props.add()
            console.log(props)
        }}>+</button>
    </div>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Page2RR)