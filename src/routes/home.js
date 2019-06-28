import React from 'react'
import { Link } from 'react-router-dom'
import Welcome from '../components/welcome'
import Clock from '../components/clock'
import Cityname from '../components/cityname'
import List from '../components/list'
import Toggle from '../components/toggle'
const Home = () => (
  <div>
    <p>this is home page</p>
    <Link to="/about">goto About</Link>
    <Welcome name='welcome'/>
    <Clock/>
    <Cityname name='city'/>
    <List/>
    <Toggle/>
  </div>
)

export default Home