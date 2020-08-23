import React from 'react';
import logo from '../assets/logo.svg';
import 'bootswatch/dist/lumen/bootstrap.css'
 // eslint-disable-next-line
import $ from 'jquery'
 // eslint-disable-next-line
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'toastr/build/toastr.min.js'
import NavBar from '../components/navbar/NavBar'
import MainContainer from '../components/mainContainer/mainContainer'
import Footer from '../components/footer/footer'

import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar/>
      <img src={logo} className="App-logo" alt="logo" />
      <MainContainer/>
      <Footer/>
    </div>
  );
}

export default App;
