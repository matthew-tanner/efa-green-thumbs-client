import React from "react";
import { Row, Col, Card } from "antd";

const Home = (props) => {
  return (
    <>
      <Row type="flex" justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col>
          <Card
            bordered={false}
            style={{ width: "70vw" }}
            type="flex"
            justify="center"
            align="middle"
            cover={<img alt="logomain" src="../assets/logo.png" />}
          >
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
