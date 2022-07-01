import React from 'react'
import './sideNav.scss'
import logo1 from '../assets/images/logo1.png'
import Icon from '../assets/images/Icon.png'
import Settings from '../assets/images/settings.png'
import { NavLink } from 'react-router-dom'

const SideNav = () => {
    const icons=[
        {id:1,title:'Dashboard',link:'dashboard'},
        {id:2,title:'User Management',link:'usermgmt'},
        {id:3,title:'Academics',link:'academics'},
        {id:4,title:'Notice Board',link:'noticeboard'},
        {id:5,title:'Inbox',link:'inbox'}
    ]
  return (
    <div className='side-nav'>
        <div className="name-logo">
            <div className="name-logo-container">
            <div className="logo">
                <img src={logo1} alt="logo1" />
            </div>
            <div className="h2">Nobel CMS</div>
            </div>
        </div>

        <div className="side-nav-middle">
           {icons.map((icon,key)=><NavLink to={icon.link}><div className='icon'>
            <img src={Icon} alt='icon'/> 
            <div className="title"> {icon.title}</div>
            </div></NavLink>)}
        </div>
        <div className="side-nav-bottom">
            <img src={Settings} alt="settings" />
            <div className="title">Settings</div>
        </div>
    </div>
  )
}

export default SideNav