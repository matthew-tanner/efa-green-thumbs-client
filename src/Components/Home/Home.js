import React from "react";
import { Row, Col, Card } from "antd";

const Home = (props) => {
  return (
    <>
      <Row type="flex" justify="center" align="middle" style={{ minHeight: "100vh" }} onClick={() => props.setOpen(!props.open)}>
        <Col>
          <Card
            bordered={false}
            style={{ width: "70vw", backgroundColor: "#9FB8AD" }}
            type="flex"
            justify="center"
            align="middle"
            cover={<img alt="logomain" src="../assets/logo.png" style={{maxWidth: "400px"}} />}
          >
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
