import React from 'react'
import {Button} from 'antd-mobile'
class WrpperComponent extends React.Component{
    render() {
        return (<>
            <Button>button</Button>
        </>)
    }
}

function hoc (WrappedComponent) {

    return class extends React.Component{
       constructor(props){
           super(props)
       }
        render() {
            const {visible, props} = this.props;
            console.log(this.props)
            if(visible) {
                return <WrappedComponent {...props}/>
            } else {
                return null
            }
            
        }
    }
}
const HocWrpperComponent = hoc(WrpperComponent);
class HocPage extends React.Component {
    render() {
        return(<div>
            <h1>高阶组件</h1>
            <HocWrpperComponent visible={true}/>
        </div>)
    }
}

export default HocPage