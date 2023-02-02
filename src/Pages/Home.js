import React from "react";
import { Navbar, Container, Table } from "react-bootstrap";

export const Home = () => {
  return (
    <div>
      <div>
        <Navbar className="text-white bg-secondary" expand="md">
          <Container className="d-block">
            <p className="display-5 text-center">Get our Latest Album</p>
            <img
              style={{ width: "100px" }}
              className="rounded mx-auto d-block"
              src="https://images.macrumors.com/t/JioodhXXb8qPT9NZBGGlYedCIq8=/400x0/article-new/2017/02/itunesremote.jpg?lossy"
              alt="icon"
            />
          </Container>
        </Navbar>
      </div>
      <div>
          <div>
              <h3 className="text-center mt-4">TOURS</h3>
          </div>
        <Table className="border d-flex align-items-center justify-content-center">
          <tbody>
            <tr>
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <button className="bg-info text-white">BUY TICKET</button>
              </td>
            </tr>
            <tr>
              <td>JUL17</td>
              <td>TORONTO,ON</td>
              <td>BUDWEISER STAGE</td>
              <td>
                <button className="bg-info text-white">BUY TICKET</button>
              </td>
            </tr>
            <tr>
              <td>JUL18</td>
              <td>BRISTOW, VA</td>
              <td>JIGGY LUBE LIVE</td>
              <td>
                <button className="bg-info text-white">BUY TICKET</button>
              </td>
            </tr>
            <tr>
              <td>JUL19</td>
              <td>PHOENIX, AZ</td>
              <td>AK-CHIN PAVILION</td>
              <td>
                <button className="bg-info text-white">BUY TICKET</button>
              </td>
            </tr>
            <tr>
              <td>JUL20</td>
              <td>LAS VEGAS, NV</td>
              <td>T-MOBILE ARENA</td>
              <td>
                <button className="bg-info text-white">BUY TICKET</button>
              </td>
            </tr>
            <tr>
              <td>JUL21</td>
              <td>CONCORD, CA</td>
              <td>CONCORD PAVILION</td>
              <td>
                <button className="bg-info text-white">BUY TICKET</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
