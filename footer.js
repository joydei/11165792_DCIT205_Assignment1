import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './footer.css';

const MyFooter = () => {
  return (
    <Navbar className="navi" fixed="bottom" bg="warning" variant="dark">
      <Container>
        <Navbar.Text className="text-muted">
          © {new Date().getFullYear()} University of Ghana
        </Navbar.Text>
        <Nav className="ml-auto">
          <Nav.Link
            href="https://www.facebook.com/"
            className="text-muted"
            style={{ marginRight: '10px' }}
          >
            <i className="fab fa-facebook-f"></i>
          </Nav.Link>
          <Nav.Link
            href="https://twitter.com/"
            className="text-muted"
            style={{ marginRight: '10px' }}
          >
            <i className="fab fa-twitter"></i>
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/"
            className="text-muted"
            style={{ marginRight: '10px' }}
          >
            <i className="fab fa-linkedin-in"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyFooter;
