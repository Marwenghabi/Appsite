
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/home/Home';
import Contact from "./component/contact/Contact";
import Index from "./component/about-us/Index";
import Partners from "./component/partners/Partners";
import IndexMarkets from "./component/markets/IndexMarkets";
import IndexService from './component/services/Index';
import IndexDevops from './component/services/IndexDevops';
import SendMail from './component/contact/sendmail';
import Redhat from './component/partners/Redhat';
import Podyam from './component/partners/podyam';
class App extends React.Component{

  render (){
  return (
    <Router>
      <div>
        <div >
          <div >
            <Routes >
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Markets" element={<IndexMarkets />} />
              <Route path="/About" element={<Index/>} />
              <Route path="/Contact" element ={<SendMail/>}/>       
              <Route path="/Partners" element ={<Partners/>}/> 
              <Route path="/Redhat" element ={<Redhat/>}/> 
              <Route path="/Podyam" element ={<Podyam/>}/>       
              <Route path="/Services" element ={<IndexService/>}/>  
              <Route path="/Devops" element ={<IndexDevops/>}/>      
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
}

export default App ;

