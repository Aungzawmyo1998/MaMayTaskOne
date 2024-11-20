import React from 'react'
import { NavLink } from 'react-router-dom';

import Logo from '../assets/images/big-logo1-beta.svg';

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faChevronLeft, faTableCells, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { faHandshake,  faBuilding  } from '@fortawesome/free-regular-svg-icons'



//CSS 
import "../styles/sideBar.css"

function SideBar({ children }) {
    return (
        <div id='layout'>
            <div className="header">
                <div className='logo-container'>
                    <img src={Logo} alt="Logo" className='logo' />
                </div>
                <div className="data-container">
                    <div className="left-side"> <FontAwesomeIcon className='icon' icon={faChevronLeft} /> <span className='text'>協力会社</span></div>
                    <div className="right-side">
                        <div className="manage-toll-container">
                            <FontAwesomeIcon className='grid-icon' icon={faTableCells} />
                            <select className='select-tool' >
                                <option value="">現場管理ツール</option>
                            </select>
                        </div>
                        <div className="profile-container">
                            <FontAwesomeIcon className='user' icon={faUser} />
                            <FontAwesomeIcon className='bars' icon={faBars} />
                        </div>
                    </div>
                </div>
            </div>

            <div id='data'>
                <div className="side-bar-container">
                    <ul>
                        <li className='link-item'>
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                                <div className="icon"><FontAwesomeIcon icon={faBuilding} /></div>
                                <div className="text">会社を探す</div>
                            </NavLink>
                        </li>
                        <li className='link-item'>
                            <NavLink to='/partner/company' className={({ isActive }) => (isActive ? 'active-link' : '')} >
                                <div className="icon"><FontAwesomeIcon icon={faHandshake} /></div>
                                <div className="text">協力会社</div>
                            </NavLink>
                        </li>
                        <li className='link-item'>
                            <NavLink to="/message" className={({ isActive }) => (isActive ? 'active-link' : '')} >
                                <div className="icon"><FontAwesomeIcon icon={faMessage} /></div>
                                <div className="text">メッセージ </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="child">
                    {children}
                </div>
            </div>
            
            
            
        </div>
        
    )
}

export default SideBar