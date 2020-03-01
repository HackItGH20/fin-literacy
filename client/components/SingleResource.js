import React from 'react'

export const SingleResource = props => {
  const resource = props.resource
  console.log('this is my resource', resource)

  return (
    <div>
      <h4>{resource.name}</h4>
      <ul>
        <p>{resource.description}</p>
      </ul>
      <a href={`${resource.resourceUrl}`}>Visit the site here.</a>
    </div>
  )
}
