import React from 'react'
import { NavLink } from 'react-router-dom';

import Logo from '../assets/images/big-logo1-beta.svg';

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faHandshake,  faBuilding } from '@fortawesome/free-regular-svg-icons'


//CSS 
import "../styles/sideBar.css"

function SideBar({ children }) {
    return (
        <div id='main'>
            <div id='sideBar'>
                <div className='logo-container'>
                    <img src={Logo} alt="Logo" className='logo' />
                </div>
                <div className="side-bar-container">
                    <ul>
                        <li className='link-item'>
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                                <div className="icon"><FontAwesomeIcon icon={faBuilding} /></div>
                                <div className="text">Company</div>
                            </NavLink>
                        </li>
                        <li className='link-item'>
                            <NavLink to='/partner/company' className={({ isActive }) => (isActive ? 'active-link' : '')} >
                                <div className="icon"><FontAwesomeIcon icon={faHandshake} /></div>
                                <div className="text">Partner Company</div>
                            </NavLink>
                        </li>
                        <li className='link-item'>
                            <NavLink to="/message" className={({ isActive }) => (isActive ? 'active-link' : '')} >
                                <div className="icon"><FontAwesomeIcon icon={faMessage} /></div>
                                <div className="text">Message </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="data-side">
                <div className="header">

                </div>
                <div className="child">
                    {children}
                </div>
            </div>
            
        </div>
        
    )
}

export default SideBar