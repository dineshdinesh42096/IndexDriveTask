import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Carousel, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";  
import banner from "./image/banner.jpg";

const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in with Email: ${email}`);
  };

  return (
    <div>
    <Navbar className="custom-navbar" bg="dark" variant="dark" expand="lg" expanded={expanded}>
      <div className="container">
        <Navbar.Brand className="head" as={Link} to="/">EDGECUT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="#login" onClick={() => setExpanded(false)}>Login</Nav.Link>
            <Nav.Link as={Link} to="/menu" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>Furnitures</Nav.Link>
            <Nav.Link as={Link} to="/blog" onClick={() => setExpanded(false)}>Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>

    {/* /-------------------------------------------------------------------- */}

    <Carousel>
        <Carousel.Item  className="carousel">
          <img
            className="d-block w-100"
            src={banner}
            alt="Furniture 1"
          />
          <Carousel.Caption  className="bcontent">
            <h3>FOR ALL YOUR FUNITURE NEED</h3>
            <p>High-quality furniture for a stylish home.</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        <br/><br/>

        {/* ---------------------------------------------------------------------- */}

        <div className="container mt-5 login" id="login">
          <br/>
        <h2 className="text-center title">Login</h2>
        <Form onSubmit={handleSubmit} className="w-50 mx-auto">
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="password" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="secondary" type="submit" className="mt-3 w-70">
            Login
          </Button>
          <br/><br/>
          <a href="#">Forgot Password</a>
        </Form>
        <br/><br/><br/>
      </div>


    </div>
  );
};

export default Home;
