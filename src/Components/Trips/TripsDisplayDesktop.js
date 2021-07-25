import React, { useState, useEffect } from "react";
import {useHistory, useLocation} from "react-router-dom";
import { EditOutlined } from '@ant-design/icons';
import { Card, Button, message, Col, Row } from "antd";

import APIURL from "../../Utils/Environment";

const TripsDisplayDesktop = (props) => {
  const history = useHistory()
  const location = useLocation();
  console.log(location);
  let localToken = "";
  if (typeof location.state === "undefined"){
    localToken = props.token
  }else{
    localToken = location.state.token
  }

  const [trips, setTrips] = useState([]);

  
  const fetchTrips = () => {
    fetch(`${APIURL}/trip/all`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localToken}`,
      }),
    })
      .then((res) => res.json())
      .then((tripData) => {
        console.log(tripData);
        setTrips(tripData);
      })
      .catch((err) => err);
  }


  const deleteTrips = (trip) => {
    fetch(`${APIURL}/trip/${trip.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localToken}`,
      }),
    })
      .then(() => fetchTrips())
      .then(success())
      .catch((err) => console.log(err));
  };
  const success = () => {
    message.success('Successfully deleted')
}
  const editTrips = (trip) => {
    // console.log(`In editTrips in TripsDisplay - trip = ${trip}`);
    // return <TripActivityIndex token={props.token} tripId={trip.id} />;
    history.push({
    pathname: "/tripActivityIndex",
    state: {
        token: localToken,
        parkCode: trip.parkCode,
        tripId: trip.id
        }
    })    
  }
  const { Meta } = Card

  useEffect(() => {
    console.log("In TripsDisplay useEffect");
    fetchTrips();
  }, []);

  return (
    <>
    <div className="site-card-wrapper" >
            <div className="desktop-trips">
                <Row >

                    {trips.map(trip => {
                        return (
                            <Col>
                                <Card
                                    className="activityCard"
                                    size="small"
                                    style={{ width: 300, margin: 10 }}
                                    cover={
                                        <img
                                            alt="Park Planner Logo"
                                            src="../../../assets/logo.png"
                                        />
                                    }
                                >
                                    <Meta
                                        title={trip.name}
                                        bordered="true"
                                    />
                            

                                    <Button
                                        icon={<EditOutlined />}
                                        onClick={() => {editTrips(trip)}}
                                    />

                                    <Button
                                        shape="circle"
                                        style={{ color: 'black', zIndex: 10 }}
                                        onClick={() => { deleteTrips(trip) }}
                                    >
                                      X
                                    </Button>
                                </Card>
                            </Col>
                        )
                    })}

                </Row>
            </div>
        </div>
      {/* <div className="trips-grid">
        <Card title="Trips">
          {trips.map((trip) => {
            return (
              <div className="card-grid-style">
                <Card.Grid style={gridStyle}>
                  {trip.name}
                  <br />
                  <Button
                    className="delete-button"
                    onClick={() => {
                      deleteTrips(trip);
                    }}
                  >
                    Delete
                  </Button>
                  <br />
                 <Button onClick={() => {editTrips(trip)}}>Edit</Button><br/>
                </Card.Grid>
              </div>
            );
          })}
        </Card>
      </div> */}
    </>
  );
};
export default TripsDisplayDesktop;