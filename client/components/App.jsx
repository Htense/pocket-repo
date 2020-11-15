import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Header from './Header.jsx'



const App = () => {
  return (
    <>  
      <Router>
      <Route path='/' component={Header} />
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Home}/>
      </Router>
    </>
    )
}

export default App
