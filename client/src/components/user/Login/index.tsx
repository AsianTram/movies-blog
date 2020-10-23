import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

import './Login.scss';
import { login } from '../../../redux/actions/users';

const Login = () => {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  const dispatch = useDispatch()
  const submitHandler=()=>{
    dispatch(login({email, password}))
  }

  return (
    <div className='login'>
      <h3>Sign In</h3>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="button" className="btn btn-primary" onClick={()=>submitHandler()}>Submit</button>
      </form>
    </div>
  )
}

export default Login
