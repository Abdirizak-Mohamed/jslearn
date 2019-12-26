import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';


function App() {
  return (
     <React.Fragment>
       <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
       <Row>
        <Col sm={4}>
        <ListGroup>
         <ListGroup.Item>No style</ListGroup.Item>
         <ListGroup.Item variant="primary">Primary</ListGroup.Item>
         <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
         <ListGroup.Item variant="success">Success</ListGroup.Item>
         <ListGroup.Item variant="danger">Danger</ListGroup.Item>
         <ListGroup.Item variant="warning">Warning</ListGroup.Item>
         <ListGroup.Item variant="info">Info</ListGroup.Item>
         <ListGroup.Item variant="light">Light</ListGroup.Item>
         <ListGroup.Item variant="dark">Dark</ListGroup.Item>
        </ListGroup>
        </Col>
        <Col sm={8}>sm=4</Col>
       </Row>
       </Container>
     </React.Fragment> 
  );
}

export default App;
