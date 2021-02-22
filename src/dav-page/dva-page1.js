import React from 'react'
import dva, {connect} from 'dva'

const app =  dva();
app.model = {
    nameSpace: 'dvaPage1',
    state: {
        count:1,
        name:'a1'
    },
    effects:{

    },
    reducers:{
        add(state){
            return({
                ...state,
                count: state.count+1
            })
        }
    }
}

const DvaPage1  = (props) => {
    const {count1,dispatch} = props;
    return (
        <div>
            <span>{count1}</span>
            <button onClick={() => dispatch({type:'dvaPage1/add'})}>+</button>
        </div>
    )
}

export default connect(({dvaPage1}) => ({dvaPage1}))(DvaPage1)