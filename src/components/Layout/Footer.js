import { Navbar, Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <div>
      <Navbar className="text-white bg-info" expand="md">
        <Container>
          <p className="display-5">The Generics</p>
        </Container>
      </Navbar>
    </div>
  );
};
