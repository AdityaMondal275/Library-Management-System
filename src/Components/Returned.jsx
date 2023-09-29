import React from "react";
import './Returned.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import BallotIcon from '@mui/icons-material/Ballot';
import SearchIcon from '@mui/icons-material/Search';

const Returned=( )=>{
    return(
        <>
            <Navbar/>
            <div className="body">
                <Sidebar/>
                <div className="whole">
                    <h1>Returned Books</h1>
                    <div className="sub-navbar">
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
                    <div className="issued-table">
                        <table class="table table-hover table-bordered">
                            <thead className='table-light'> 
                                <tr>
                                <th scope="col">Serial No.</th>
                                <th scope="col">Book Name</th>
                                <th scope="col">Book ID</th>
                                <th scope="col">Member ID</th>
                                <th scope='col'>Member Name</th>
                                <th scope='col'>Expected Date</th>
                                <th scope='col'>Returned Date</th>
                                <th scope="col">Book Return</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Book 1</td>
                                <td>B 001</td>
                                <td>M 001</td>
                                <td>Member 1</td>
                                <td>DD-MM-YYYY</td>
                                <td>DD-MM-YYYY</td>
                                <td></td>
                                </tr>
                                <tr>
                                <th scope="row">1</th>
                                <td>Book 2</td>
                                <td>B 002</td>
                                <td>M 002</td>
                                <td>Member 2</td>
                                <td>DD-MM-YYYY</td>
                                <td>DD-MM-YYYY</td>
                                <td></td>
                                </tr>
                                <tr>
                                <th scope="row">1</th>
                                <td>Book 3</td>
                                <td>B 003</td>
                                <td>M 003</td>
                                <td>Member 3</td>
                                <td>DD-MM-YYYY</td>
                                <td>DD-MM-YYYY</td>
                                <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Returned;