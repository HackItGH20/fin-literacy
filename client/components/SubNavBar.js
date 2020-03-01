import React from 'react'

const SubNavBar = props => {
  return (
    <div className="sub-nav">
      <div className="category_button" onClick={() => props.setTopic('')}>
        finances
      </div>
      <div className="category_button" onClick={() => props.setTopic('credit')}>
        credit
      </div>
      <div className="category_button" onClick={() => props.setTopic('debt')}>
        debt
      </div>
      <div
        className="category_button"
        onClick={() => props.setTopic('investment')}
      >
        investment
      </div>
      <div className="category_button" onClick={() => props.setTopic('saving')}>
        saving
      </div>
      <div className="category_button" onClick={() => props.setTopic('loans')}>
        loans
      </div>
    </div>
  )
}

export default SubNavBar
