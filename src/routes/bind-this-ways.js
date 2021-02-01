import React,{useState} from 'react'
import Cpt1 from '../component/cpt1'
const Child1 = (props) => {
    console.log('child1-rending')
    const [num2, setnum2] = useState(0)
    const {num} = props
    return(<div>
        {num}
        {num2}
        <button onClick={() => setnum2(num2+1)}>child1-button</button>
    </div>)
}
class Page1 extends React.Component{
    handleClick2;
    constructor(props) {
        super(props);
        this.state = {
            num: 1,
            title: ' react study'
        };
        this.handleClick2 = this.handleClick1.bind(this);
    }

    handleClick1() {
        
        this.setState({num:this.state.num+1})
        console.log(this.state.num)

    }

    handleClick3 = () => {
        this.setState({
            num: this.state.num + 1,
        })
    };

    render() {
        console.log('rending')
        return (<div>
            <h2>Ann, {this.state.num}</h2>
            <button onClick={this.handleClick2}>btn1</button>
            <Child1 num={this.state.num}/>
            <Cpt1 count={this.state.num}/>
            <button onClick={this.handleClick1.bind(this)}>btn2</button>
            <button onClick={() => this.handleClick1()}>btn3</button>
            <button onClick={this.handleClick3}>btn4</button>
        </div>)
    }
}
export default Page1