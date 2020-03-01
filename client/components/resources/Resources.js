import React from 'react'
import {Link, Route} from 'react-router-dom'
import {SingleResource} from './SingleResource'
import axios from 'axios'

export class Resources extends React.Component {
  constructor() {
    super()
    this.state = {
      resources: [],
      selectedResource: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick(id) {
    const {data} = await axios.get(`/api/resources/${id}`)
    this.setState({
      selectedResource: data
    })
  }

  async componentDidMount() {
    const allResources = await axios.get('/api/resources')
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
                <Link onClick={() => this.handleClick(resource.id)}>
                  {resource.name}
                </Link>
              </div>
            )
          })}
        </div>

        <div id="expand">
          {this.state.selectedResource.name && (
            <SingleResource resource={this.state.selectedResource} />
          )}
        </div>
      </div>
    )
  }
}
