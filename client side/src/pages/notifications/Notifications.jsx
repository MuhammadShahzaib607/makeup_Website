import React from 'react'
import Notification from '../../components/notification/Notification'
import "./notifications.scss"

const Notifications = () => {
  return (
    <div className='notifications'>
      <h1>Notifications</h1>
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </div>
  )
}

export default Notifications