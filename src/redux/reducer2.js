const initState = {
    name:'page2-react-redux',
    num:0,
}
const reducer2 = (state=initState,action) => {
    switch(action.type) {
        case 'add2':
            return {...state, num: state.num+1}
            break;
        case 'decrease2' : 
            return {...state, num:state.num-1}
            break;
        default: return state;
    }
}
export default reducer2