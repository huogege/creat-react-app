import React from 'react';
class List extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const arr = [1, 2, 3, 4, 5]
        const LiItems = arr.map(
                (value) => 
                <li key={value}>{value*2}</li>
            )
    
        return(
            <div>
                <ul>
                    {LiItems}
                </ul>
            </div>
        )
    }
}
export default List