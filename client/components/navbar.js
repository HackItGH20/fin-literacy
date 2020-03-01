import React from 'react'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import {Resources} from './resources/Resources'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import {logout} from '../store'

function Navbar(props) {
  return (
    <Router>
      <div id="main">
        <h1> 🤑 $ F i n L i t $ 🤑</h1>
        <div id="navbar" className="row">
          <Link to="/">
            <h2>home</h2>
          </Link>
          <Link to="/resources">
            <h2>resources</h2>
          </Link>
        </div>
        <Route exact path="/resources" component={Resources} />
      </div>
    </Router>
  )
}

export default Navbar
