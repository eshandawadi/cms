import React from 'react'
import './topNav.scss'
import logo from '../assets/images/logo.png'
import circle from '../assets/images/circle.png'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link, NavLink, Route, Routes } from "react-router-dom";
import UserMgmt from '../userMgmt/UserMgmt';
const TopNav = () => {
    const options = [
        'one', 'two', 'three'
      ];
      const defaultOption = options[0];
  return (
    <>
   
    <div className='top-nav'>
        <div className="top-nav-container">
        <div className="logo-header">
            <img src={logo} alt="logo" />
            <div className="h1">User Management</div>
        </div>
        <ul className='nav-items'>
           <NavLink to='viewuser'>
           <li tabIndex={1}>
            View User
            </li>
            </NavLink> 
            <NavLink to='stdmgmt'>
            <li tabIndex={2}>
             Add User   
            </li>
            </NavLink>
           
           
        </ul>
        <div className="user-profile">
            <div className="user-img">
                <img src={circle} alt="cirlce" />
            </div>
            <div className="user-info">
                <div className="title">Yashu Neupane</div>
                <div className="sub-title">Username</div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        </div>
    </div>
    </>
  )
}

export default TopNav