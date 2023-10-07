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
                                Members<br/>
                                300
                            </a>
                        </div>
                        <div className="total-books">
                            <a href="./Books">
                                Total Books<br/>
                                1300
                            </a>
                        </div>
                        <div className="remaining-books">
                            <a href="./Books">
                                Total Books<br/>
                                1001
                            </a>
                        </div>
                    </div>
                    <div className="row-2">
                        <div className="issued">
                            <a href="./Issued">
                                Issued Books <br/>
                                299
                            </a>    
                        </div>
                        <div className="returned">
                            <a href="./Returned">
                                Returned Books<br/>
                                54
                            </a>
                        </div>
                        <div className="date">
                            <a href="">
                                Date <br/>
                                DD-MM-YYYY
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
 }
    

  export default Dashboard