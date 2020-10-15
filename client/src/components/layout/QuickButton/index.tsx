import React from 'react'

import './QuickButton.scss'
const QuickButton = () => {
  return (
    <div className="quickbutton">
      <button className="quickbutton__up"><i className="fas fa-chevron-up"></i></button>
      <button className="quickbutton__add"><i className="fas fa-plus"></i></button>
    </div>
  )
}

export default QuickButton
