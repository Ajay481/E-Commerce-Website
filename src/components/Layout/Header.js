import { Container, Navbar } from "react-bootstrap";
import { Cart } from "../Cart/Cart";
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <div>
      <div className="fixed-top">
        <Navbar bg="dark" expand="md" variant="dark">
          <Container className="justify-content-center">
            <NavLink
              to="/home"
              style={{ textDecoration: "inherit", color: "white" }}
            >
              HOME
            </NavLink>
            <NavLink
              to="/store"
              style={{ textDecoration: "inherit", color: "white" }}
              className="me-5 ms-5"
            >
              STORE
            </NavLink>
            <NavLink
              to="/about"
              style={{ textDecoration: "inherit", color: "white" }}
              className="me-5"
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/login"
              style={{ textDecoration: "inherit", color: "white" }}
              className="me-5"
            >
              LOGIN
            </NavLink>
            <NavLink
              to="/contactus"
              style={{ textDecoration: "inherit", color: "white" }}
            >
              CONTACT US
            </NavLink>
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
