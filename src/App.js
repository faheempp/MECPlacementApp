import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{"body { background-color: #282c34; }"}</style>
      </Helmet>
      <Container>
      <Navbar className="App-nav" sticky="top" expand="lg" bg="light" variant="light">
      <Container>
      <Navbar.Brand href="#home">PC Website</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#applications">Applications</Nav.Link>
        <Nav.Link href="#profile">Profile</Nav.Link>
      </Nav>
      </Container>
      </Navbar>
      </Container>
    </div>
  );
}

export default App;
