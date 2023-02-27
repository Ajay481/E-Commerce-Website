import { useState, useContext, useEffect } from "react";
import { Badge, Button, Offcanvas, Table } from "react-bootstrap";
import { CartContext, AuthContext } from "../../store/cart-context";
import { getCartListService } from "../../services/apiService";

export const Cart = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  const a = authCtx.userEmailId.replace("@", "");
  const newEmailId = a.replace(".", "");

  const getCartList = async () => {
    if (authCtx.isLoggedIn) {
      const data = await getCartListService(newEmailId);
      setCartQuantity(data?.length);
      cartCtx.setCartItem(data);
    } else if (!authCtx.isLoggedIn) {
      setCartQuantity(0);
    }
  };

  useEffect(() => {
    getCartList();
  }, [authCtx.isLoggedIn]);

  useEffect(() => {
    if (cartCtx.cartItem.length > 0) setCartQuantity(cartCtx?.cartItem?.length);
  }, [cartCtx]);

  const handleShow = async () => {
    setShow(true);
  };
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
            {cartCtx?.cartItem?.map((item, index) => (
              <tr key={index}>
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
