import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';


// component
import SideBar from '../src/components/SideBar'
import Home from '../src/pages/Home'
import PartnerCompany from '../src/pages/PartnerCompany'
import Message from '../src/pages/Message';


function App() {
  return (
    <Router>
      <div className='app'>
        <SideBar >
          <div className="content">
            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/partner/company' element={ <PartnerCompany /> } />
              <Route path='/message' element={ <Message /> } />
            </Routes>
          </div>
        </SideBar>
      </div>
    </Router>
  );
}

export default App;
