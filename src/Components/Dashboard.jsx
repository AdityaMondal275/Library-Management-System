import  React from "react";
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import './Dashboard.css';

const  Dashboard =()=>{
    return(
        <>
            <Navbar/>
            <div className="body">
                <Sidebar/>
                <div className="whole">

                    <div className="dashboard">
                        <h1>Dashboard</h1>
                    </div>

                    <div className="row-1">
                        <div className="member">
                            <a href="./Member">
                                <h4>Members</h4>
                                <p>300</p>
                            </a>
                        </div>
                        <div className="total-books">
                            <a href="./Books">
                                <h4>Total Books</h4>
                                <p>1300</p>
                            </a>
                        </div>
                        <div className="remaining-books">
                            <a href="./Books">
                                <h4>Total Books</h4>
                                <p>1001</p>
                            </a>
                        </div>
                    </div>
                    <div className="row-2">
                        <div className="issued">
                            <a href="./Issued">
                                <h3>Issued Books</h3>
                                <p>299</p>
                            </a>    
                        </div>
                        <div className="returned">
                            <a href="./Returned">
                                <h3>Returned Books</h3>
                                <p>54</p>
                            </a>
                        </div>
                        <div className="date">
                            <a href="/">
                                <h3>Date</h3>
                                <p>DD-MM-YYYY</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
 }
    

  export default Dashboard