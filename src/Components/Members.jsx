import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Members.css';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import BallotIcon from '@mui/icons-material/Ballot';


const  Members=()=>{
    return(
        <>
            <Navbar/>
            <div className='body'>
                <Sidebar/>
                             
                <div className="whole">
                    <h1>Members</h1>                 
                
                    <div className="sub-navbar">
                        <div className="add-user">
                            <a href="/"><PersonAddAlt1Icon/>Add Member</a>
                        </div>
                        <div className="filter">
                            <a href="/"><FilterAltIcon/>Filter</a>
                        </div>
                        <div className="show-all">
                            <a href="/"><BallotIcon/>Show All</a>
                        </div>
                        <div className="space"></div>
                        <div className="search">
                            <input type="text" placeholder="Search"/>
                        </div>
                        <div className="search-logo">
                            <button type="button"><SearchIcon/></button>
                        </div>
                    </div>
                    {/* table */}
                    <div className="member-table">
                        <table class="table table-hover table-bordered">
                            <thead className='table-light'>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Member ID</th>
                                    <th scope="col">Member Name</th>
                                    <th scope="col">Contact No.</th>
                                    <th scope="col">Email ID</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>0123</td>
                                        <td>Aditya Mondal</td>
                                        <td>9674059530</td>
                                        <td>mondaladitya275@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>124</td>
                                        <td>Saugata Mondal</td>
                                        <td>9876587942</td>
                                        <td>saugatamondal123@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>125</td>
                                        <td>Arpita Roy</td>
                                        <td>9687458690</td>
                                        <td>royarpita859@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>126</td>
                                        <td>Debjyoti Dutta Roy</td>
                                        <td>9876987598</td>
                                        <td>debjyotidutta78@gmail.com</td>
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Members;