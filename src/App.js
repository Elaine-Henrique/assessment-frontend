import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './styles.css';

// import Header from './Components/Header';
// import Navbar from './Components/Navbar';
import RouteURL from './Routes';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <RouteURL />
        <Footer />
      </div>
    </Router>
  )};
}

export default App;


