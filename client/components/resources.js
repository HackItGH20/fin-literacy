import React from 'react'
import {Link, Route} from 'react-router-dom'
import {ResourceExpanded} from './resourceExpanded'

export function Resources(props) {
  return (
    <div id="resource-container">
      <div id="list">
        <ul>
          <div id="resource-link">mint</div>

          <div id="resource-link">doctor of credit</div>
          <div id="resource-link">clarity</div>
          <div id="resource-link">another</div>
          <div id="resource-link">link</div>
        </ul>
      </div>

      <div id="expand">
        <p>
          description description descriptiondescription description description
          description description{' '}
        </p>
        <ul>
          <li>mobile app</li>
          <li>budget overview?</li>
          <li>another thing</li>
        </ul>
        <a href="htpp://mint.com">link to go to website</a>
      </div>
    </div>
  )
}

// export default Resources
