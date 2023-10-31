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
                            <div className="">
                                <NavLink  to={"/Dashboard"} className={'dash'}> <AssessmentIcon/>Dashboard </NavLink>   
                            </div>
                                                
                            <div className={''}>
                                <NavLink  to={"/Members"} className={'mem'}> <PeopleIcon/>Members </NavLink>
                            </div>

                            <div className={""}>    
                                <NavLink  to={"/Book"} className={'book'}> <MenuBookIcon/>Books </NavLink>
                            </div>

                            <div className={""}>
                                <NavLink  to={"/Issued"} className={'isd'}> <AssignmentLateIcon/>Issued </NavLink>
                            </div>

                            <div className={""}>
                                <NavLink  to={"/Returned"} className={'rtn'}> <AssignmentTurnedInIcon/>Returned </NavLink>
                            </div>
                        </div>
                </div>
        </>
    )
}
export default Sidebar