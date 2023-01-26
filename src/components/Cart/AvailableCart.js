import { Container, Card , Button } from "react-bootstrap";

export const AvailableCart = () => {
  return (
    <div className='d-flex'>
    <div className="mx-auto">
    <Container>
      <Card style={{ width: "300px" }}>
        <Card.Title>Colors</Card.Title>
        <Card.Img
          variant="top"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
        />
        <Card.Body className='d-block'>
          <p>Price: 100</p>
          <Button variant="info">ADD TO CART</Button>
        </Card.Body>
      </Card>
    </Container>
    <Container>
    <Card style={{ width: "300px" }}>
      <Card.Title>Black and White Colors</Card.Title>
      <Card.Img
        variant="top"
        src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
      />
      <Card.Body className='d-block'>
      <p>Price: 50</p>
          <Button variant="info">ADD TO CART</Button>
      </Card.Body>
    </Card>
  </Container>
  </div>
  <div className="mx-auto">
  <Container>
      <Card style={{ width: "300px" }}>
        <Card.Title>Yellow and Black Colors</Card.Title>
        <Card.Img
          variant="top"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
        />
        <Card.Body className='d-block'>
        <p>Price: 70</p>
          <Button variant="info">ADD TO CART</Button>
        </Card.Body>
      </Card>
    </Container>
    <Container>
    <Card style={{ width: "300px" }}>
      <Card.Title>Blue Color</Card.Title>
      <Card.Img
        variant="top"
        src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
      />
      <Card.Body className='d-block'>
      <p>Price: 100</p>
          <Button variant="info">ADD TO CART</Button>
      </Card.Body>
    </Card>
  </Container>
  </div>
  </div>
  );
};
