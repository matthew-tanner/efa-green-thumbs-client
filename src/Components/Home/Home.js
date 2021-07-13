import React from "react";
import { Row, Col, Card } from "antd";

const Home = (props) => {
  return (
    <>
      <Row type="flex" justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col>
<<<<<<< HEAD
            <Card bordered={false} style={{ width: 700 }} type='flex' justify='center' align='middle'>
                <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>Welcome to Park Planner</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Explore your options for exploring the country.</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Plan + Discover + Explore</h3>
                </div>
                </Carousel>
        </Card>
=======
          <Card
            bordered={false}
            style={{ width: "70vw" }}
            type="flex"
            justify="center"
            align="middle"
            cover={<img alt="logomain" src="../assets/logo.png" />}
          >
          </Card>
>>>>>>> 0caf661917de41538f6357d69f6599f86cd7adab
        </Col>
      </Row>
    </>
  );
};

export default Home;
