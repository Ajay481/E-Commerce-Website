import { Container, Navbar } from "react-bootstrap";
import { Cart } from "../Cart/Cart";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div className="fixed-top">
        <Navbar bg="dark" expand="md" variant="dark">
          <Container className="justify-content-center">
            <Navbar.Brand>HOME</Navbar.Brand>
            <Navbar.Brand className="me-5 ms-5">STORE</Navbar.Brand>
            <NavLink to="/about" style={{ textDecoration: 'inherit', color : 'white' }}>ABOUT</NavLink>
          </Container>
          <Cart />
        </Navbar>
      </div>
      <div className="mt-5">
        <Navbar className="text-white bg-secondary" expand="md">
          <Container className="justify-content-center">
            <p className="display-1">The Generics</p>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};
