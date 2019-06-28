import React from 'react';
import { Button } from 'antd';
import { Tag } from 'antd';
class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    render() {
        return(
            <div>
                <Button type="primary">hello,world</Button>
                <Tag color="magenta">{this.state.date.toDateString()}</Tag>
                <Tag color="magenta">这是父组件传过来的数据{this.props.name}</Tag>
            </div>
        )
    }
}
export default Welcome