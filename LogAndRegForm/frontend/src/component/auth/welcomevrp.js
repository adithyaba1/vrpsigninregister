import React from 'react'
import SplitterLayout from 'react-splitter-layout';
//import 'react-splitter-layout/lib/index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../welcomevrp/Header'
import Map from '../welcomevrp/Map';
import './css/welcomevrp.css'

function WelcomeVrp(){
    return(
        <div>
    <SplitterLayout>
       <div className="firstleft">
          <div className="head1"> <h4>Welcome to VRP</h4></div>
          <Router>
            <Header/>
          </Router>
        
          </div>
        <div className="secondright">
        <Router>
            <Route path="/map" component={Map}></Route>
        </Router>
          </div>
          </SplitterLayout>
      </div >
    )
}

export default WelcomeVrp;