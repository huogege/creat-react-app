import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'

import Home from './home'
import Page1 from './bind-this-ways'
import MyTick from './currrent-tick'    //事件循环机制，16ms
const Routes = () => (
  <HashRouter>
    <div>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/bind-this-ways" component={Page1} />
        <Route path="/currrent-tick" component={MyTick} />

      </Switch> 
    </div>
  </HashRouter>
)

const App = () => (
  <Routes />
)

export default App