import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  )
}

export default App
