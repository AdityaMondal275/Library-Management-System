
import './App.css';
import "./index.css";
 import Dashboard  from './components/Dashboard';
 import { BrowserRouter as Router,Routes, Route,  } from 'react-router-dom';

import Members from './components/Members';
import Issued from './Issued/Issued';
import Returned from './components/Returned';
import Books from './components/Books';


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
