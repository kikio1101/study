import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ErrorPage, TodoPage, HomePage, SignupPage } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/todo" component={TodoPage} />
        <Route path="/signup" component={SignupPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  )
}

export default App
