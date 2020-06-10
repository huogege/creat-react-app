import React from 'react'

import Test1 from '../components/test1'
import Test2 from '../components/test2'

//测试redux异步调用reduce
import request from '../utils/ajax'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise';     //第一种promise
import thunk from 'redux-thunk';
import todoApp from '../redux/reducer'
import { addTodo, requestGet, requestGeted } from '../redux/actions'


import { createAction } from 'redux-actions';    //第二种promise

let store = createStore(todoApp, applyMiddleware(thunk))
export default class page2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                message1: '1- value from super',
                message2: '2- value from super'
            },
            image: 'image',
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {         //react 当我们setstate的时候，即使子组件的状态属性值没有改变，也会去走一遍update，
        //
        // this.setState({
        //     data: {
        //         ...this.state.data,
        //         message1: '1- value from supe changed'
        //     }
        // })


        store.dispatch(addTodo('page2'))   //同步更新视图



        //异步的action,在没使用中间件的情况下，请求完成之后dispatch，
        /*const fetchPosts = (dispatch, params) => {
            return new Promise((resolve, reject) => {
                dispatch(requestGet(params))
                return request(`https://yesno.wtf/api?id=${params}`).then(res => {
                    const obj = { type: 'requestGetedType', payload: res }
                    resolve(obj)
                })

            })

        }
        fetchPosts(store.dispatch, '123').then((obj) => {
            store.dispatch(obj)
        })*/


        const fetchPosts = postTitle => (dispatch, getState) => {
            dispatch(requestGet(postTitle));
            return request(`https://yesno.wtf/api?id=${postTitle}`)
                .then(response => {
                    dispatch(requestGeted(response))
                })
                
        };

        // 使用方法一
        //store.dispatch(fetchPosts('reactjs'));
        // 使用方法二
        store.dispatch(fetchPosts('fire')).then(() =>
            {
                let {fromAjax: {payload: {image}}} = store.getState()
                this.setState({image}) //异步更新数据
            }
            
        );

    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    
    render() {
        console.log('render')
        let { data: {
            message1,
            message2,
            
        } ,image} = this.state


        let storeData = store.getState()
        let { todos } = storeData
       
        return (
            <div>
                <Test1 message={message1}></Test1>
                <Test2 message={message2}></Test2>
                <p>我的数据来自于store</p>
                {
                    todos.map((o) => <p key={o.text}>{o.text}</p>)
                }
                <button onClick={this.handleClick}>button</button>
                <img src={image}></img>
                <span>{image}</span>
            </div>
        )
    }
}
