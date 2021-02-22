const initState = {
    name:'page1-react-redux',
    num:0,
}
const reducer1 = (state=initState,action) => {
    console.log(state)
    switch(action.type) {
        case 'add':
            return {...state, num: state.num+1}
            break;
        case 'decrease' : 
            return {...state, num:state.num-1}
            break;
        default: 
            console.log('default?')
        //return initState;   这里写成，initState就太傻了
        return state;
    }
}
export default reducer1