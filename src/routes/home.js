import React from 'react'
import { Link } from 'react-router-dom'
import Welcome from '../components/welcome'
import Clock from '../components/clock'
import Cityname from '../components/cityname'
import List from '../components/list'
import Toggle from '../components/toggle'
import {getJSON, fn} from '../utils/ajax2'
import lodash from 'lodash'

const curry = lodash.curry;
console.log(curry)
const myFilter = curry(function(f, array) {
  console.log(array)
  return array.filter(f)
})

const filter1 = myFilter(function(item) {
  return typeof item == 'string'
})
console.log(filter1(['a','b','c',1]))







const scroll_content = {
  height: '20rem',
  backgroundColor: '#ccc',
}
const Home = () => (
  <div>
    <p>this is home page</p>
    <Link to="/about">goto About</Link>
    <Welcome name='welcome' />
    <Clock />
    <Cityname name='city' />
    <List />
    <Toggle />
  </div>
)
class Home2 extends React.Component {
  componentDidMount() {
    //从redux的state拿数据
    const { store } = this.context
    getJSON('//localhost:8082/getJson').then(
      (res) => {

      }
    )

      const scroll_content = document.getElementsByClassName('scroll_content')[0]
      scroll_content.addEventListener('scroll', () => {
        alert(1)
      }, false)


  }
  render() {
    return (
      <div>
        <div className="scroll_content" style={scroll_content}>
          <p>1</p>
          <p>1</p>
          <p>1</p><p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
        </div>
      </div>
    )
  }
}
export default Home2