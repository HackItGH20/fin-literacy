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
        <h2>News Feed:</h2>
        {this.state.articles.map(article => (
          <Headline article={article} key={article.id} />
        ))}
      </div>
    )
  }
}

export default NewsFeed
