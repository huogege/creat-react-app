import React,{useState} from 'react'
import resolve from 'resolve'
 const MyTick = (props) => {
     const [style, setstyle] = useState({})
     const onClick =() => {
        console.log(this)
        const box = document.getElementById('box')
        //box.style.backgroundColor = 'blue'
        setstyle({color:'red'})
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