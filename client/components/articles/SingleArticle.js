import React from 'react'

class SingleArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      article: this.props.location.state.article
    }
  }
  render() {
    console.log(this.state.article)
    return (
      <div>
        <h3>
          <a href={this.state.article.url}>{this.state.article.title}</a>
        </h3>
        <h3>by {this.state.article.title}</h3>
        <h3>{this.state.article.description}</h3>
      </div>
    )
  }
}

export default SingleArticle
