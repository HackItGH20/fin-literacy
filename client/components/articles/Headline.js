import React from 'react'
import {Redirect} from 'react-router-dom'

class Headline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }
  changeView() {
    this.setState({redirect: true})
  }
  render() {
    return (
      <div>
        {this.state.redirect && (
          <Redirect
            to={{
              pathname: `/articles/${this.props.article.id}`,
              state: {article: this.props.article}
            }}
          />
        )}
        <h3 onClick={() => this.changeView()}>{this.props.article.title}</h3>
        <h3>{this.props.article.author}</h3>
        <h3>{this.props.article.source.name}</h3>
      </div>
    )
  }
}

export default Headline
