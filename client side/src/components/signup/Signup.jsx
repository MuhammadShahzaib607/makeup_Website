import React from 'react'
import "./signup.scss"

const Signup = () => {
return (
    <div className='signup'>
        <div className="container">
            <div className="userName">
                <span>User Name:</span>
                <input type="text" placeholder='UserName' />
            </div>

            <div className="email">
                <span>Email:</span>
                <input type="email" placeholder='Email' />
            </div>

            <div className="password">
                <span>Password:</span>
            <div>
                    <input type="password" placeholder='Password' />
                    <img src="/img/hideIcon.png" alt="" />
            </div>
            </div>

            <div className="confirmPassword">
                <span>Confirm Password:</span>
               <div>
                 <input type="password" placeholder='Confirm Password' />
                 <img src="/img/hideIcon.png" alt="" />
               </div>
            </div>
        </div>
    </div>
  )
}

export default Signup