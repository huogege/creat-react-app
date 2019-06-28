import React from 'react'
import {Button} from 'antd'
import request from '../utils/ajax'
import '../styles/page1.less'
export default class ButtonPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '按钮'
        }
    }
    componentDidMount() {
        request('//sunfire.com:8081/getJson').then((response) => {
            console.log(response)
        }, (error) => {

        })
    }
    render() {
        return(
            <div className="main">
               <Button type="primary">{this.state.name}</Button>
            </div>       
        )
    }
}