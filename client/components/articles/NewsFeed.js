import React from 'react'
import axios from 'axios'
import Headline from './Headline'
import SubNavBar from '../SubNavBar'

class NewsFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      topic: ''
    }
  }
  async componentDidMount() {
    const {data} = await axios.get('/api/newsAPI')
    const articles = data.articles
    this.setState({articles})
  }

  setTopic = async topic => {
    console.log("you're here with this topic: ", topic)
    this.setState({topic})
    const {data} = await axios.get('/api/newsAPI/' + topic)
    const articles = data.articles
    this.setState({articles})
  }

  render() {
    return (
      <div>
        <SubNavBar setTopic={this.setTopic} />
      <div className="news_list">
        <h1 id="news_header">This Week's Financial News</h1>
        {this.state.articles.length &&
          this.state.articles.map(article => (
            <Headline article={article} key={article.id} />
          ))}
      </div>
      </div>
    )
  }
}

export default NewsFeed
