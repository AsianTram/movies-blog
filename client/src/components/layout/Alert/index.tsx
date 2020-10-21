import React, {Fragment} from 'react'
import {useSelector} from 'react-redux';

import {AppState} from '../../../types'

const Alert = () => {
  
  const alerts= useSelector((state:AppState)=> state.alert.alerts)

  return (
    <Fragment>
      {alerts.map((a) =>
        a.message ? (
          <div key={a.id} className={`alert alert-${a.alertType}`} role="alert">
            {a.message}
          </div>
        ) : (
          <div key={a.id} className={`alert alert-${a.alertType}`} role="alert">
            There's an error in loading request
          </div>
        )
      )}
    </Fragment>
  )
}

export default Alert
