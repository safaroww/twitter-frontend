import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import classes from './Layout.module.scss'
import Tweet from '../../components/Tweet/Tweet'

function Layout() {
  return (
    <div className={classes.Layout}>
      <Sidebar />
      <div>
        <Header />
        <Tweet />
      </div>
    </div>
    )
}

export default Layout