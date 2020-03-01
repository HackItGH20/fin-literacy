import React from 'react'
import axios from 'axios'
import Headline from './Headline'

class NewsFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }
  async componentDidMount() {
    const {data} = await axios.get('/api/newsAPI')
    const articles = data.articles
    this.setState({articles})
  }
  render() {
    return (
      <div className="news_list">
        <h1 id="news_header">This Week's Financial News</h1>
        {this.state.articles.length &&
          this.state.articles.map(article => (
            <Headline article={article} key={article.id} />
          ))}
      </div>
    )
  }
}

export default NewsFeed
