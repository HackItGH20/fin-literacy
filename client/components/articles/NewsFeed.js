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
      <div>
        <h2>News Feed:</h2>
        {this.state.articles.map(article => (
          <Headline article={article} key={article.id} />
        ))}
      </div>
    )
  }
}

export default NewsFeed
