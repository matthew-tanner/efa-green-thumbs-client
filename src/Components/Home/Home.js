import React from 'react'
import { Carousel, Row, Col, Card } from "antd";

const contentStyle = {
    height: "400px",
    color: "#fff",
    lineHeight: "400px",
    fontSize: "30px",
    textAlign: "center",
    background: "#9fb8ad",
  };

const Home = () => {
    return(
        <>
        <Row type="flex" justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col>
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
        </Col>
        </Row>
        </>
    )
}

export default Home