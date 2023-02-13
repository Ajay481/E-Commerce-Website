import { useState, useContext, useEffect } from "react";
import { Badge, Button, Offcanvas, Table } from "react-bootstrap";
import { CartContext } from "../../store/cart-context";

export const Cart = () => {
  const cartCtx = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  const itemBadge = cartCtx.cartItem.length;

  useEffect(() => {
    setCartQuantity(itemBadge);
  }, [itemBadge]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Button
        className="block-example border border-info me-5"
        variant="dark"
        onClick={handleShow}
      >
        cart
        <Badge bg="info">{cartQuantity}</Badge>
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {cartCtx.cartItem.map((item) => (
              <tr key={item.title}>
                <td>
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{ width: "50px" }}
                  />
                  {item.title}
                </td>
                <td>{item.price}</td>
                <td>
                  {item.quantity}
                  <Button variant="danger">REMOVE</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Offcanvas>
    </>
  );
};
