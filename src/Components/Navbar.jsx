import React from "react";
import './Navbar.css';
import {  NavLink,  } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar =()=>{
    return(
        <>
            <nav  className='navbar'>
                <div className="lms">
                    Library Management
                </div>
                <div className="nav-space"></div>
                <div className="icons">
                    <div className='logo-icon'><NavLink  to={"/"} className={"dnav"}><AccountCircleIcon/></NavLink></div>
                    <div className='bell-icon'><NavLink  to={"/"} className={"dnav"}><NotificationsIcon/></NavLink></div>   
                </div>           
            </nav>
        </>
    )
}
export default Navbar;
