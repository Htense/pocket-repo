import React from 'react'
import Home from './Home.jsx'
import Nav from './Nav.jsx'

import { HashRouter as Router, Route } from 'react-router-dom'


const App = () => {
  return (
    <>  
      <Router>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Home} />
      </Router>
    </>
    )
}

export default App
