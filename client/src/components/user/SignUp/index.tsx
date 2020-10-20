import React from 'react'

import './SignUp.scss';

const SignUp = () => {
  return (
    <div className="signup">
      <h3>Create a New User Account</h3>
       <form>
       <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" className="form-control" id="name"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      
    </div>
  )
}

export default SignUp
