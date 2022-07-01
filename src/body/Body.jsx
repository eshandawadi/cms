import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import TopNav from '../topNav/TopNav'
import UserMgmt from '../userMgmt/UserMgmt'

const Body = () => {

  return (
    <>
    <div className='body'>
        <TopNav/>
        <Outlet/>
    </div>
    </>
  )
}

export default Body