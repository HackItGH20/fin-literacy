import React from 'react'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import {Resources} from './resources'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'
// import {logout} from '../store'

class SubNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  topicClickHandler = topic => {
    this.props.setTopic(topic)
  }

  render() {
    return (
      <div className="sub-nav">
        <p>finances</p>
        <p>credit</p>
        <p>debt</p>
        <p>investment</p>
        <p>saving</p>
        <p>loans</p>
      </div>
    )
  }
}

export default SubNavBar
