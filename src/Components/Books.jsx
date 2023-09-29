import React from "react";
import './Books.css';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import BallotIcon from '@mui/icons-material/Ballot';


const Books=()=>{
    return(
        <>
            <Navbar/>
            <div className="body">
                <Sidebar/>
                <div className="whole">
                    <h1>Books</h1>                 
                
                    <div className="sub-navbar">
                        <div className="add-user">
                            <a href="/"><PersonAddAlt1Icon/>Add Book</a>
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
                                    <th scope="col">Book ID</th>
                                    <th scope="col">Book Name</th>
                                    <th scope="col">Total Books</th>
                                    <th scope="col">Available Books</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>001</td>
                                        <td>Book1</td>
                                        <td>20</td>
                                        <td>16</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>002</td>
                                        <td>Book2</td>
                                        <td>20</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>003</td>
                                        <td>Book3</td>
                                        <td>53</td>
                                        <td> 4</td>
                                    </tr>
                                    
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Books;