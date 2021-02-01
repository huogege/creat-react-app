import React from 'react'
import 'antd-mobile/dist/antd-mobile.css'
import Cpt1 from '../component/cpt1'
import Cpt2 from '../component/component-is-update'
import Father from '../component/should-component-update'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count:0
    }
  }

  render() {
    return (
      <div>
        {/* <Cpt1 parent={this}/> */}
        <Father/>
        <Cpt2/>
      </div>
    )
  }
}
export default Home