import React from 'react'
import {Link, Route} from 'react-router-dom'
import axios from 'axios'

export class Resources extends React.Component {
  constructor() {
    super()
    this.state = {
      resources: [
        {
          name: 'Guardian Life',
          resourceUrl: 'https://www.guardianlife.com/',
          personalFinance: true,
          creditCards: false,
          payingOffDebt: false,
          investing: true,
          saving: true,
          studentLoans: false
        },
        {
          name: 'Mint',
          resourceUrl: 'https://www.mint.com/',
          personalFinance: true,
          creditCards: true,
          payingOffDebt: true,
          investing: false,
          saving: false,
          studentLoans: false
        },
        {
          name: 'Credit Karma',
          resourceUrl: 'https://www.creditkarma.com/',
          personalFinance: true,
          creditCards: true,
          payingOffDebt: false,
          investing: false,
          saving: false,
          studentLoans: false
        },
        {
          name: 'Turbo Tax',
          resourceUrl: 'https://turbo.intuit.com/',
          personalFinance: true,
          creditCards: false,
          payingOffDebt: false,
          investing: false,
          saving: false,
          studentLoans: false
        }
      ]
    }
  }

  // async componentDidMount() {
  //   const allResources = await axios.get('/api/resources')

  //   this.setState({
  //     resources: allResources
  //   })
  // }

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
          {/* <div id="resource-link">mint</div>

          <div id="resource-link">doctor of credit</div>
          <div id="resource-link">clarity</div>
          <div id="resource-link">another</div>
          <div id="resource-link">link</div> */}
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
