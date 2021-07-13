import React from "react";
import { Carousel, Row, Col, Card } from "antd";
import "./App.css";
import ParkByState from "./trip/FetchParks";



function App() {
  const contentStyle = {
    height: "400px",
    color: "#fff",
    lineHeight: "400px",
    fontSize: "30px",
    textAlign: "center",
    background: "#184D47",
  };

  // const key = 'EsB6ufQhwYntOPZBgIhu6Jtf3jfbXjrAEvf8ZGEl'
  // const baseUrl = 'https://developer.nps.gov/api/v1/events?'

  const parkFetch = () => {
    fetch ('https://developer.nps.gov/api/v1/events?stateCode=IN&api_key=juZPWoiLqGQacPwyNwSLvePhqziqUeEAyhmebarc')
    .then (res => res.json())
    .then (data => console.log(data))
  }
  parkFetch()

  const parkToDoFetch = () => {
    fetch ('https://developer.nps.gov/api/v1/thingstodo?stateCode=ME&api_key=juZPWoiLqGQacPwyNwSLvePhqziqUeEAyhmebarc')
    .then (res => res.json())
    .then (data2 => console.log(data2))
  }
  parkToDoFetch()


  return (
    <div className="App">
      <Row type="flex" justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col>
          <Card bordered={false} style={{ width: 700 }}>
            <Carousel autoplay>
              {/* <div>
                <h3 style={contentStyle}>Welcome to Green Thumbs</h3>
              </div>
              <div>
                <h3 style={contentStyle}>Grow your garden and your community</h3>
              </div>
              <div>
                <h3 style={contentStyle}>Plan + Create + Inspire</h3>
              </div> */}
              <ParkByState />
            </Carousel>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
