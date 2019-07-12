import React from 'react';
import requet from '../utils/ajax'

const mapStateToProps = (state, ownProps) => {
    console.log(state) // state
    console.log(ownProps) // ownProps
  }
class Cityname extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            city: ''
        }
    }
    componentDidMount() {
        //从redux的state拿数据
        const {store} = this.context
        console.log(store)
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