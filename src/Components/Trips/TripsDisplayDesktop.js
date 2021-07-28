import React, { useState, useEffect } from "react";
import {useHistory, useLocation} from "react-router-dom";
import { EditFilled, DeleteFilled } from '@ant-design/icons';
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
                <Row className='desktop-trip-content'>

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
                                            className='image-thumbnail'
                                        />
                                    }
                                >
                                    <Meta
                                        title={trip.name}
                                        bordered="true"
                                    />
                            

                                    <Button
                                        icon={<EditFilled />}
                                        onClick={() => {editTrips(trip)}}
                                        style={{marginTop: 2, marginRight: 12, marginLeft: 12, backgroundColor: "#383e56", color: "white", border: "none"}}
                                    />

                                    <Button
                                        icon={<DeleteFilled />}
                                        onClick={() => { deleteTrips(trip) }}
                                        style={{backgroundColor: "#FB743E", color: "white", border: "none"}}
                                    >
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