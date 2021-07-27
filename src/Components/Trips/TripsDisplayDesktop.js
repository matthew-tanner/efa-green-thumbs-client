import React, { useState, useEffect } from "react";
import {useHistory, useLocation} from "react-router-dom";
import { EditOutlined } from '@ant-design/icons';
import { Card, Button, message, Col, Row } from "antd";

import APIURL from "../../Utils/Environment";

const TripsDisplayDesktop = (props) => {
  const history = useHistory()
  const location = useLocation();
  let localToken = "";
  if (typeof location.state === "undefined"){
    if (localStorage.getItem("token")) {
      localToken = localStorage.getItem("token");
    }
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
                                    id={trip.id}
                                    className="activityCard"
                                    size="small"
                                    style={{ width: 300, margin: 10 }}
                                    cover={
                                        <img
                                        src={trip.image}
                                            alt="trip planner img"
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
    </>
  );
};
export default TripsDisplayDesktop;