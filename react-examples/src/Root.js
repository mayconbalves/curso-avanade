import React from "react"
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Root