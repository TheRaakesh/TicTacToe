import logo from './logo.svg';
import Icons from "./components/icon"
import React, { useState } from "react";

import { ToastContainer, toast } from 'react-toastify'; // toastify import from docs
import 'react-toastify/dist/ReactToastify.css'; // toastify import from docs

import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, Container, button, Col, Row, Button } from "reactstrap";
import './App.css';


const itemArray = new Array(9).fill("empty");


const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMesseage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9)
  };

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(itemArray[0] + " won")
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(itemArray[3] + " won")
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(itemArray[6] + " won")
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(itemArray[0] + " won")
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(itemArray[1] + " won")
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(itemArray[2] + " won")
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(itemArray[0] + " won")
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(itemArray[2] + " won")
    }
  };

  const changeItem = itemNumber => {
    if (winMesseage) {
      return toast(winMesseage, { type: 'success' });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)
    } else {
      return toast("already filled", { type: "error" })
    }
    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMesseage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMesseage}
              </h1>
              <Button color="success"
                block
                onClick={reloadGame}>Reload the Game</Button>
            </div>)
            :
            (<h1 className="text-center text-light">
              {isCross ? "Cross" : "Circle "}
            </h1>
            )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="light" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icons name={item} />
                </CardBody>
              </Card>
            )
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default App;
