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
      <div className="headline">
        <div className="single_article_text">
          <h3>
            <a href={this.state.article.url}>{this.state.article.title}</a>
          </h3>
          {this.state.article.author && <h4>by {this.state.article.author}</h4>}
          <h4 className="article_description">
            {this.state.article.description}
          </h4>
          <img
            className="single_article_img"
            src={this.state.article.urlToImage}
          />
        </div>
      </div>
    )
  }
}

export default SingleArticle
