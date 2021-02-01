import React , {Component}from 'react';


import './App.css';



//import Scrollspy from 'react-scrollspy';//
import Nav from 'react-bootstrap/Nav';
import ScrollspyNav from "react-scrollspy-nav";
import Navbar from 'react-bootstrap/Navbar'
//Boostrap//
import 'bootstrap/dist/css/bootstrap.min.css';
//Tachyons




import Cards from '../components/Cards';



class App extends Component{
render() {
  return (
     <div>
                <ScrollspyNav
                    scrollTargetIds={["section_1", "section_2", "section_3"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                >
                    <Nav style={{"background-color": "#e0c0a3"}}>
                        <Navbar.Brand href="#home" id="brand">SANA NAAZ</Navbar.Brand>
                        <Nav.Item><Nav.Link href="#section_1" className="items">Work</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="#home" className="items">Resume</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="#section_3" className="items">Contact</Nav.Link></Nav.Item>
                        
                    </Nav>
                </ScrollspyNav>
                
                <div>
                    <center>
                    <div className="intro">
                             <p id="intro1" >Hello! I'm Sana Naaz.</p>
                             <p id="intro2">Recent IT graduate with interest in Development & Designing,devoted to crafting beautiful web experiences focused on simplicity and purpose.</p>
                             
            
                    </div>
                    
                     </center>

                    <div id="section_1">
              
                             <Cards />
                            
                    </div>
                   
                    <div id="section_3"><span>Section 3</span></div>
                </div>
            </div>
    );
  }
}
export default App;
