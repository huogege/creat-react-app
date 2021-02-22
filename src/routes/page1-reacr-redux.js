import React from 'react'
import {connect} from 'react-redux'
import httpGet from '../utils/ajax'
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        add: () => dispatch({type: 'add'}),
        decrease: () => dispatch({type: 'decrease'}),
        addDecrease:() => {
            dispatch(async() => {
                const res = await httpGet('https://yesno.wtf/api');
                res.answer == 'yes' ? dispatch({type: 'add'}) : dispatch({type: 'decrease'})
            })
        }
    }
}
const mapStateToProps = (state={}) => {
    console.log(state)
    return {
        num: state.reducer1.num,
    }
}
const mapStateToProps2 = (state={}) => {
    return {
        name: state.reducer2.name,
        num: state.reducer2.num,
    }
}
const mapDispatchToProps2 = (dispatch, ownProps) => {
    return {
        add: () => {
            dispatch({type: 'add2'})
        },
       
    }
}
const Child = connect(mapStateToProps2, mapDispatchToProps2)((props) => {
    return(<div>
        <div>{props.name}</div>
        <div>{props.num}</div>
        <button onClick={() => {
            props.add()
        }}>+</button>
    </div>)
})

const Page1RR =(props) => {
    return(<div>
        <p>page1,use,react-redux</p>
        <div>{props.num}</div>
        <button onClick={async() => {
            const res = await httpGet('https://yesno.wtf/api');     //完全可以在异步回调函数之后去做一个同步的dispatch，也可以用redux-thunk中间件实现异步操作。
            res.answer == 'yes' ? props.add() : props.decrease()
        }}>+--接口回调</button>
        <button onClick={() => {
            props.addDecrease()
        }}>+--thunk包装</button>
        <p>--------------child</p>
        <Child/>
    </div>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Page1RR)