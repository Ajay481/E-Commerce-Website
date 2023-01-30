import { useState } from "react";
import { Button, Offcanvas, Table } from "react-bootstrap";

export const Cart = () => {
  const [show, setShow] = useState(false);

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
            <tr>
              <td>
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                  alt="Colors"
                  style={{ width: "50px" }}
                />
                Colors
              </td>
              <td>100</td>
              <td>2<Button variant="danger">REMOVE</Button></td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
                  alt="Black and White Colors"
                  style={{ width: "50px" }}
                />
                Black and White Colors
              </td>
              <td>50</td>
              <td>3<Button variant="danger">REMOVE</Button></td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
                  alt="Yellow and Black Colors"
                  style={{ width: "50px" }}
                />
                Yellow and Black Colors
              </td>
              <td>70</td>
              <td>1<Button variant="danger">REMOVE</Button></td>
            </tr>
          </tbody>
        </Table>
      </Offcanvas>
    </>
  );
};
