import React from 'react'
import ReactDOM from "react-dom";
import {Button, Tag} from 'antd-mobile'



class Child extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            num:0
        }
        this.ref = React.createRef();
    }
    render() {
        return (<div>
            <App  ref={this.ref}/>
            <Button onClick={() => {
                console.log(this.ref)
                for(let i=0;i<100;i++) {
                    ((i) => {
                        setTimeout(() => {
                            this.setState((preState) => {                            
                                console.log(i)
                                return {
                                    num: preState.num + 1
                                }
                            })
                        },1000)
                    })(i)
                    
                }
            }}>add</Button>
            <Tag>{this.state.num}</Tag>
        </div>)
    }
}
function useState(initValue) {
    function setState(params) {
        
    }
    return [initValue, setState]
}
function App() {
    const [count, setCount] = useState(0)
    return (<div>
        <Tag>{count}</Tag>
    </div>)
}
function render(params) {
    ReactDOM.render(<App/>, document.getElementById('root2'))
}
const ReactHookDemo = (props) => {
    return (<div>
        <Tag>模拟hook</Tag>
        <Child/>
        <div id="root2"></div>
    </div>)
}

export default ReactHookDemo