import React from 'react';
import './Cards.css';
import empo from './empo.png';
import cafe from './cafe.png';
import crime from './crime.png'



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Content(props){


	    return (
           
	       <div className='head'>
	              <Container>
		              <Row>
			              <Col xs={8}> <h2>{props.name}</h2> </Col>
			              <Col xs={4} id="seework"><a href={props.naaz}>See Work</a></Col>
			                       
		              </Row>
		              <img src={props.pic} alt=""class="grow"/>

	              
	              </Container>
            </div>
		);
	}
	
	function Cards (){

		return(
              
              <div>
              	<Content name="Emporium Mobile App" seework="seework" pic={empo} naaz="https://www.google.com"/>

              	<Content name="Cafe Nova" pic={cafe} />
              	<Content name="Crime Investigation Record" pic={crime} />
              
              </div>
              

	   );
	}






export default Cards;