import React from 'react'
import classes from './Sidebar.module.scss'
import  Logo  from '../../assets/logo.png'
import  Home  from '../../assets/home.png'
import  Profile  from '../../assets/profile.png'
import  Notification  from '../../assets/notification.png'

function Sidebar() {
  return (
    <div className={classes.Sidebar}>
        <div className={classes.Logo}>
            <img src={Logo} alt="logo" />
        </div>
        <div className={classes.Navbar}>
            <div className={classes.Nav}>
                <img src={Home} alt="home" />
                <span>Home</span>
            </div>
            <div className={classes.Nav}>
                <img src={Profile} alt="profile" />
                <span>Profile</span>
            </div>
            <div className={classes.Nav}>
                <img src={Notification} alt="notification" />
                <span>Notification</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar