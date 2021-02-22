import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'

import Home from './home'
import Page1 from './bind-this-ways'
import MyTick from './currrent-tick'    //事件循环机制，16ms
import DvaPage1 from '../dav-page/dva-page1'  //dva,单独用貌似不行
import JsonHande from '../routes/json-handle'
import ReduxThunk from '../routes/redux-thunk'  
import ReduxWirte from '../routes/redux-write'  //
import Page1RR from '../routes/page1-reacr-redux'
import Page2RR from '../routes/page2-reacr-redux'
import ReactHookDemo from '../routes/react-hook'
import HocPage from '../routes/hoc'
const Routes = () => (
  <HashRouter>
    <div>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/bind-this-ways" component={Page1} />
        <Route path="/currrent-tick" component={MyTick} />
        <Route path="/dva-page1" component={DvaPage1} />
        <Route path="/json-handle" component={JsonHande} />
        <Route path="/redux-thunk" component={ReduxThunk} />
        <Route path="/redux-write" component={ReduxWirte} />
        <Route path="/page1-reacr-redux" component={Page1RR} />
        <Route path="/page2-reacr-redux" component={Page2RR} />
        <Route path="/routes/react-hook" component={ReactHookDemo} />
        <Route path="/routes/hoc-page" component={HocPage} />

      </Switch> 
    </div>
  </HashRouter>
)

const App = () => (
  <Routes />
)

export default App