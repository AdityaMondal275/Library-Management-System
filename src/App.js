
import './App.css';
import "./index.css";
 import Dashboard  from './Components/Dashboard';
 import { BrowserRouter as Router,Routes, Route,  } from 'react-router-dom';

import Members from "./Components/Members";
import Issued from './Components/Issued';
import Returned from './Components/Returned';
import Books from './Components/Books';


const  App=()=> {
  return (


          <Router>
              <Routes>
              <Route  path="/"   exact    element={ <Dashboard/>}></Route>
             <Route  path="/Dashboard" element={ <Dashboard/>}></Route> 
             <Route  path="/Member" element={ <Members/>}></Route>    
             <Route  path="/Book" element={ <Books/>}></Route>
             <Route  path="/Issued" element={ <Issued/>}></Route>
             <Route  path="/Returned" element={ <Returned/>}></Route>            
              </Routes>
          </Router>
           
          

           
  );
}

export default App;
