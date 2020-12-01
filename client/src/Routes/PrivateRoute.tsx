import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'
import { AppState } from '../types'

const PrivateRoute:React.FC<{path:string, component:React.FC}> = ({path, component}) => {
  const isAuthenticated = useSelector((state:AppState) => state.user.isAuthenticated)
  
  return isAuthenticated ? (<Route path={path}component={component} />) : (<Redirect to="/login"></Redirect>)
}

export default PrivateRoute
