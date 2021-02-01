/**
 * 在短时间内，比如一个事件循环中，浏览器会把对同一个dom的操作合并，所以原生和react去设置背景只生效了一次。
 * 纯js操作dom是同步的，但是渲染是异步的，因为js进程和gpu进程是互斥的。
 */
import React,{useState} from 'react'
import resolve from 'resolve'
 const MyTick = (props) => {
     const [style, setstyle] = useState({})
     const onClick =() => {
        console.log(this)
        const box = document.getElementById('box')
        box.style.backgroundColor = 'blue'
        console.log(box.style.backgroundColor);   
        setstyle({color:'red'})
        console.log(style)
        for(let i=0;i<2000000000;i++) {
            if(i == 199999999) {
                console.log(i)
            }
        }
        Promise.resolve('resolved').then(v => console.log(v))
        setTimeout(() => console.log('setTimeout'))
        requestAnimationFrame(() => console.log('渲染之前的时机'))
     }
     return(<div>
         <div id="box" style={{
             width:'100px',
             height:'100px',
             backgroundColor:style.color || '#ccc'
         }} onClick={() => onClick()}></div>
     </div>)
 }
 export default MyTick