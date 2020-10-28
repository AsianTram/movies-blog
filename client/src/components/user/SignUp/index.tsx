import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

import './SignUp.scss';
import { signup } from '../../../redux/actions/users';

const SignUp = () => {
  const [name, setName]= useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const dispatch= useDispatch()
  
  const submitHandler = ()=>{
    dispatch(signup({name, email, password}))
  }
  return (
    <div className="signup">
      <h3>Create a New User Account</h3>
       <form>
       <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <button type="button" onClick={()=> submitHandler()} className="btn btn-primary">Submit</button>
      </form>
      
    </div>
  )
}

export default SignUp
