import React from 'react'

export const Headline = props => {
  return (
    <div>
      <h3>{props.article.title}</h3>
      <h3>{props.article.author}</h3>
      <h3>{props.article.source.name}</h3>
    </div>
  )
}

export default Headline
