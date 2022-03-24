import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Login from './Login.js';
import { Route, Routes, Navigate , Link, withRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Test from './Test';
import QCM from './Components/Chapters/Chapter1/Qcm.js';
import Concept from './Components/Chapters/Chapter1/concept';
import Scoreboard from './Components/Scoreboard/Scoreboard';
import {Table} from 'reactstrap'
import Scoreboardd from './Components/Scoreboard/Scoreboard2';
function App() {
  return (
    // <Router>
    //   <Routes>  
    //     <Navigate exact from="/" to="/login" />
    //     <Route path="/login" component={Login} />
    //     {/* <Route path="/menu" component={Menu} /> */}
    //   </Routes>
    // </Router>
    // <Login />
    // <QCM />
    // <Concept />
    // <Scoreboard />
    // <Scoreboardd />
<div className="App">
      <h1>Welcome to Our Application</h1>
      <Routes>
        <Route path="/" element={<Concept />} />
        <Route path="about" element={<QCM />} />
      </Routes>
    </div>
  );
}

export default App;
