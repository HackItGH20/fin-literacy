import React from 'react'
import {Route, Link} from 'react-router-dom'

function Navbar(props) {
  return (
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
    </div>
  )
}

export default Navbar
