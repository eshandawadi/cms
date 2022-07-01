import React from 'react'
import { sectionOption } from '../mockData/sectionOption'
import './header.scss'
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        {sectionOption.map((section)=> <div className='section'>
        <NavLink to={section.link} tabIndex={1}>  {section.title} </NavLink>
          
        </div>)}
    </div>
  )
}

export default Header