import React from "react";
import './Sidebar.css';
import {  NavLink,  } from 'react-router-dom';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const Sidebar =()=>{
    return(
        <>
                <div className='sidebar'>
                        <div  className='menu'>
                            <div className="dash">
                                <NavLink  to={"/Dashboard"}> <AssessmentIcon/>Dashboard </NavLink>   
                            </div>
                                                
                            <div className={"mem"}>
                                <NavLink  to={"/Member"}> <PeopleIcon/>Members </NavLink>
                            </div>

                            <div className={"book"}>    
                                <NavLink  to={"/Book"}> <MenuBookIcon/>Books </NavLink>
                            </div>

                            <div className={"isd"}>
                                <NavLink  to={"/Issued"}> <AssignmentLateIcon/>Issued </NavLink>
                            </div>

                            <div className={"rtn"}>
                                <NavLink  to={"/Returned"}><AssignmentTurnedInIcon/>Returned </NavLink>
                            </div>
                        </div>
                </div>
        </>
    )
}
export default Sidebar