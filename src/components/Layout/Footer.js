import { Navbar, Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <div>
      <Navbar className="text-white bg-info" expand="md">
        <Container>
          <h1 className="font-weight-bold">The Generics</h1>
        </Container>
      </Navbar>
    </div>
  );
};
