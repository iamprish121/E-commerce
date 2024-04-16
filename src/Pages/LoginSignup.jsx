import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="login-signup">
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Username"/>
          <input type="email" placeholder='Email Address...' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <button>Reset</button>
        <p className="loginsignup-login">
          Already have an account ? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>I agree to the terms of use & privarcy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
