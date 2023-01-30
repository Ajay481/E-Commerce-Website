import React from 'react';
import { Container, Card , Button } from "react-bootstrap";

export default function CardComponent(props) {
    return (
        
    <Container className="mt-5">
      <Card style={{ width: "300px" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Img
          variant="top"
          src={props.src}
        />
        <Card.Body className='d-block'>
          <p>Price: {props.price}</p>
          <Button variant="info">ADD TO CART</Button>
        </Card.Body>
      </Card>
    </Container>
    )
}