import React from "react";
import { Carousel, Row, Col, Card } from "antd";
import "./App.css";

function App() {
  const contentStyle = {
    height: "400px",
    color: "#fff",
    lineHeight: "400px",
    fontSize: "30px",
    textAlign: "center",
    background: "#184D47",
  };

  return (
    <div className="App">
      <Row type="flex" justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col>
          <Card bordered={false} style={{ width: 700 }}>
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}>Welcome to Green Thumbs</h3>
              </div>
              <div>
                <h3 style={contentStyle}>Grow your garden and your community</h3>
              </div>
              <div>
                <h3 style={contentStyle}>Plan + Create + Inspire</h3>
              </div>
            </Carousel>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
