import  React from "react";
 import Sidebar from "./Sidebar";

 const  Dashboard =()=>{
return(
    <>
    { <Sidebar/>}

    <div className="dcontainer">

<div className="dash">
  <img src="img/dashicon.png" alt="" />
    <h1>Dashboard</h1>
</div>

<div className="dinsidecontainer1">

<div className="dmember">
    <h3>Member</h3>
    <span>299</span>
</div>

<div className="dtotalbooks">
    <h3>Total Books</h3>
    <span>299</span>
</div>

<div className="dremainingbooks">
    <h3>Remaining Books</h3>
    <span>299</span>
</div>

</div>


<div className="dinsidecontainer2">

<div className="dissued1">
<img src="img/dashicon.png" alt="" />
<div className="dissued">
    <h3>Issued</h3>
    <span>79</span>
</div>
</div>


<div className="dnotreturned1">
<img src="img/dashicon.png" alt="" />
<div className="dnotreturned">
    <h3>Non Returned</h3>
    <span>7</span>
</div>
</div>


<div className="ddate1">
<img src="img/dashicon.png" alt="" />
<div className="ddate">
    <h3>Date</h3>
    <span>23-09-2023</span>
</div>
</div>

</div>


        
    </div>
    </>
)
 }
    

  export default Dashboard