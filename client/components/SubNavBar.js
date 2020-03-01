import React from 'react'

const SubNavBar = props => {
  return (
    <div className="sub-nav">
      <div onClick={() => props.setTopic('')}>finances</div>
      <div onClick={() => props.setTopic('credit')}>credit</div>
      <div onClick={() => props.setTopic('debt')}>debt</div>
      <div onClick={() => props.setTopic('investment')}>investment</div>
      <div onClick={() => props.setTopic('saving')}>saving</div>
      <div onClick={() => props.setTopic('loans')}>loans</div>
    </div>
  )
}

export default SubNavBar
