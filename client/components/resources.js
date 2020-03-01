import React from 'react'
import {Link, Route} from 'react-router-dom'
import {ResourceExpanded} from './resourceExpanded'

export function Resources(props) {
  return (
    <div id="resource-container">
      <div id="list">
        <ul>
          <div id="resource-link" onClick={ResourceExpanded}>
            mint
          </div>
          <div id="resource-link">doctor of credit</div>
          <div id="resource-link">clarity</div>
          <div id="resource-link">another</div>
          <div id="resource-link">link</div>
        </ul>
      </div>

      <div id="expand">more info here hello</div>
    </div>
  )
}

// export default Resources
