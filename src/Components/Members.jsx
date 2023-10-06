import React from 'react'
import './Members.css'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import GroupsIcon from '@mui/icons-material/Groups';
import { Button } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CancelIcon from '@mui/icons-material/Cancel';

const Members = () => {
  return (
    <>
        <Navbar/>
        <div className="inbody">
        <Sidebar/>
        <div className="members-body">
            <div className="members-logo">
                <h1><GroupsIcon className='group-logo' fontSize='large'/></h1>
                <h1>Members</h1>
            </div>
        </div>
    

    <div className="mem-whole">
      <div className="mem-add-user">
        <div className="btn-sec">
            <Button className="btn1"><GroupAddIcon /> Add Member</Button>
            <Button className="btn2"><FilterAltIcon /> Filter</Button>
            <Button className="btn3"><CancelIcon /> Show All</Button>
        </div>
        <div className="search-sec">
                <form className="d-flex" role="search">
                <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
        </div>
      </div>
    {/* table */}
    <div className="table-sec">
      <table class="table table-hover table-bordered">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Member Id</th>
            <th scope="col">Name</th>
            <th scope="col">Contact No.</th>
            <th scope="col">Email Id</th>
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

export default Members


{/* <div className="sub-navbar">
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
                    </div> */}