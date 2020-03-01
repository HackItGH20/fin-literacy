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
      <div className="headline">
        {this.state.redirect && (
          <Redirect
            to={{
              pathname: `/articles/${this.props.article.id}`,
              state: {article: this.props.article}
            }}
          />
        )}
        <div className="headline_text">
          <h3 className="headline_title" onClick={() => this.changeView()}>
            {this.props.article.title}
          </h3>
          {this.props.article.author && <h4>By {this.props.article.author}</h4>}
          <h4>Source: {this.props.article.source.name}</h4>
          <h4>Published on: {this.props.article.publishedAt.slice(0, 10)}</h4>
        </div>
        <img className="headline_img" src={this.props.article.urlToImage} />
      </div>
    )
  }
}

export default Headline
