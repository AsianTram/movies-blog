import React from 'react'

import notfound from './Notfound.gif'

const Notfound = () => {
  return (
    <div className="notfound">
      <img
        src={notfound}
        style={{ width: '60%', margin: 'auto', display: 'block' }}
        alt='Not Found!' />
    </div>
  )
}

export default Notfound
