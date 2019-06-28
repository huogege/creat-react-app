import React from 'react';
import requet from '../utils/ajax'
class Cityname extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            city: ''
        }
    }
    componentDidMount() {
        requet('//sunfire.com:8081/getJson').then(
            (res) => {
                console.log(res)
                this.setState({
                    city: res.data.address.city
                })
            }
        )
    }
    render() {
        return(
            <div>
                <p>
                    {this.state.city + this.props.name}
                </p>
            </div>
        )
    }
}
export default Cityname