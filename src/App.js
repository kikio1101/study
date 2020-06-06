import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ErrorPage, TodoPage, HomePage, SignupPage } from './pages'
import GlobalStyles from './components/shared/global-styles'
import Gnb from './components/gnb'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Gnb />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/todo" component={TodoPage} />
        <Route path="/signup" component={SignupPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  )
}

export default App
