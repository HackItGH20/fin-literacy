import React from 'react'
import {Link, Route} from 'react-router-dom'
import axios from 'axios'

export class Resources extends React.Component {
  constructor() {
    super()
    this.state = {
      resources: []
    }
  }

  async componentDidMount() {
    const allResources = await axios.get('/api/resources')
    console.log(allResources)

    this.setState({
      resources: allResources.data
    })
  }

  render() {
    return (
      <div id="resource-container">
        <div id="list">
          {this.state.resources.map(resource => {
            return (
              <div id="resource-link" key={resource.id}>
                {resource.name}
              </div>
            )
          })}
        </div>

        <div id="expand">
          <p>
            brief description brief description brief description brief
            description brief description
          </p>
          <h4>why we love it:</h4>
          <ul>
            <li>mobile app</li>
            <li>budget overview?</li>
            <li>another thing</li>
          </ul>
          <a href="htpp://mint.com">link to go to website!!!</a>
        </div>
      </div>
    )
  }
}

// export default Resources
