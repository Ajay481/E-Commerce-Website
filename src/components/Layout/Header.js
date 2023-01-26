import { Container, Navbar , Button } from "react-bootstrap"

export const Header = () => {
    return (
        <div>
        <Navbar sticky="top" bg="dark" expand="md" variant="dark">
            <Container className="justify-content-center">
                <Navbar.Brand>HOME</Navbar.Brand>
                <Navbar.Brand>STORE</Navbar.Brand>
                <Navbar.Brand>ABOUT</Navbar.Brand>
            </Container>
            <Button className="block-example border border-info" variant="dark">cart</Button>
        </Navbar>
        <Navbar className="mt-1" bg="secondary" expand="md" variant="light">
            <Container className="justify-content-center">
                <p className="display-2">The Generics</p>
            </Container>
        </Navbar>
        </div>
    )
}