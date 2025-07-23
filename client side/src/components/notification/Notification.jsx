import React from 'react'
import "./notification.scss"

const Notification = () => {
  return (
    <div className='notification'>

        <div className="user">
            <div>
                <img src="/img/avatar.png" alt="" />
                <span>Muhammad_Shahzaib</span>
            </div>
<div className='date'>25 Feb 2025</div>
        </div>

<div className="subject">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, placeat.</div>

<div className="message">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat sint sit perferendis ut blanditiis dolore deserunt? Eaque sint, omnis doloribus reprehenderit veritatis asperiores iure sit sed dolore nostrum vero architecto quae iusto consequuntur quos dolorem debitis mollitia nesciunt.
</div>

<div className="toggleDate">25 Feb 2025</div>

<div className="deleteBtn">Delete</div>
    </div>
  )
}

export default Notification