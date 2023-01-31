import React, { useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { CartContext } from "../../store/cart-context";

export default function CardComponent(props) {
  const cartCtx = useContext(CartContext);

  const cartHandler = (title, src, price) => {
    const newItem = {
      title,
      src,
      price,
      quantity: 1,
    };

    let isPresent = false;

    cartCtx.cartItem.map((item) => {
      if (item.title === newItem.title) {
        isPresent = true;
        return newItem;
      }
      return item;
    });

    cartCtx.setCartItem(
      isPresent ? [...cartCtx.cartItem] : [...cartCtx.cartItem, newItem]
    );
  };
  return (
    <Container className="mt-5">
      <Card style={{ width: "300px" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Img variant="top" src={props.src} />
        <Card.Body className="d-block">
          <p>Price: {props.price}</p>
          <Button
            variant="info"
            onClick={() => cartHandler(props.title, props.src, props.price)}
          >
            ADD TO CART
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
