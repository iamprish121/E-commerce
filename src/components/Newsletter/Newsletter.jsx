import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email </h1>
        <p>Subcribe to our newsletter and stay  in the loop with us.</p>
        <div>
        <input type="email" placeholder='Your email address...'/>
        <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
