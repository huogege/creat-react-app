import React from 'react';

function readonly(target, key, desc) {
    console.log(target)
    console.log(key)
    console.log(desc)
}
function log(target) {
    target.prototype.say = function() {            //这样直接重写了整个say方法
        
    }
}
@log
class Numberic{
    @readonly PI=  3.1415
    say() {
        console.log('1')
        alert(2)
    }
}

let  num = new Numberic()
console.log(num.PI)
num.say()
class Deractor extends React.Component{
    constructor(props) {
        super(props)
        this.name = props.name
    } 
    render() {
        return(
            <div>
                ....
            </div>
        )
    }
}
export default Deractor