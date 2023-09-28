import React from "react";
import {  NavLink,  } from 'react-router-dom';


const Sidebar =()=>{
    return(
        <>     

        <span  className='hnav'>

<nav  className='nnav'>
    <div className="insidenav">
        Library Management
    </div>
    <img src="img/loginicon.png" alt=".." className='logoicon' />
    <img src="img/bellicon.png" alt=".." className='bellicon' />
    
</nav>

<menu className='menu'>
    <span>
        <ul  className='mlist'>
        <div id="dashboard" className='pages'>
        
        <img src="img/dashicon.png" alt="" />
                    <li >  <NavLink  to={"/Dashboard"} className={"dnav"}> Dashboard </NavLink></li>
        
        </div>
        
       
        <div  id="member" className='pages'>
        <img src="img/membericon.png" alt="" />
        <li >  <NavLink  to={"/Member"} className={"mnav"}> Members </NavLink></li>
        </div>

           <div  id="books" className='pages'>
           <img src="img/bookicon.png" alt="" />
           <li >  <NavLink  to={"/Book"} className={"bnav"}> Books </NavLink></li>
           </div>

           <div  id="issued" className='pages'>
           <img src="img/issuedicon.png" alt="" />
           <li >  <NavLink  to={"/Issued"} className={"inav"}> Issued </NavLink></li>
           </div>

            <div id="returned" className='pages'>
            <img src="img/issuedicon.png" alt="" />
            <li >  <NavLink  to={"/Returned"} className={"rnav"}> Returned </NavLink></li>
            </div>
        </ul>
    </span>
    <div>
   
        
        
    </div>
</menu>
</span>
        </>
    )
}
export default Sidebar