import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'

import Home from './home'
import About from './about'
import MobxTest from './mobxTest'
import Deractor from './deractor'
import Counter from './Counter'
import Page2 from './page2'
const Routes = () => (
  <HashRouter>
    <div>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/mobxTest" component={MobxTest} />
        <Route path="/deractor" component={Deractor} />
        <Route path="/counter" component={Counter} />


        <Route path="/page2" component={Page2} />

      </Switch>
    </div>
  </HashRouter>
)

const App = () => (
  <Routes />
)

export default App