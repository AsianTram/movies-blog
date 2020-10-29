import React from 'react'
import {Link} from 'react-router-dom'

import './QuickButton.scss'
const QuickButton = () => {
  return (
    <div className="quickbutton">
      <button className="quickbutton__up"><i className="fas fa-chevron-up"></i></button>
      <Link to ='/newpost'><button className="quickbutton__add"><i className="fas fa-plus"></i></button></Link>
    </div>
  )
}

export default QuickButton
