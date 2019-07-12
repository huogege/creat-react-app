import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux'

import { increaseAction } from '../redux/actions'

class Counter extends React.Component {

    render() {
        const { value, onIncreaseClick } = this.props
        console.log(this.context)
        return (
            <div>
                <span>{value}</span>
                <Button onClick={onIncreaseClick}>increase</Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        value: state.counter.count
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)

