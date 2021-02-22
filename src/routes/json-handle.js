import React from 'react'
import ReactJson from 'react-json-view'
const src = '{"phonenumber":"14444444444","admin":false,"password":"$2a$10$bFTcHE8bHZJcb4wWUegwo.Af1uHaMfq8nzEog/A5/ePj5ZjIMy8Om","email":"test04@168.com","nickName":"test4","sex":"1","params":{},"userName":"46056","userId":105,"createBy":"admin","status":"0"}'
const src2 = '[{a:1},{b:2}]'
console.log(eval(src2))
const JsonHande  = (props) => {
    return(<div>
        <ReactJson name="false" src={eval(src2)} />

    </div>)
}

 export default JsonHande