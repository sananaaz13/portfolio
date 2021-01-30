import React, {Component} from 'react';


import './App.css';


//Scrollspy npm package
//import Scrollspy from 'react-scrollspy';//
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//Boostrap//
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
render() {
  return (
    <Navbar>
      <Navbar.Brand href="#home">SANA NAAZ</Navbar.Brand>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Navbar>
    );
  }
}
export default App;
