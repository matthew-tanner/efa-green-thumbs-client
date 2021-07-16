import React from "react";
import { Row, Col, Card, Button } from "antd";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  let history = useHistory();

  return (
    <>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}
        onClick={() => {
          props.open === true ? props.setOpen(!props.open) : <></>
        }}
      >
        <Col>
          <Card
            bordered={false}
            style={{ width: "70vw", backgroundColor: "#9FB8AD" }}
            type="flex"
            justify="center"
            align="middle"
            cover={<img alt="logomain" src="../assets/logo.png" style={{ maxWidth: "400px" }} />}
          >
            <Button type="primary" onClick={() => history.push("/portal")}>
              Test
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
