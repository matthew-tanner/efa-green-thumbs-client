import React, { useState, useEffect } from "react";
import {useHistory, useLocation} from "react-router-dom";
import { Card, Button, message } from "antd";

import APIURL from "../../Utils/Environment";

const TripsDisplay = (props) => {
  const history = useHistory()
  const location = useLocation();
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
      .catch((err) => err);
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

  useEffect(() => {
    fetchTrips();
  }, []);

  const gridStyle = {
    width: "100%",
    textAlign: "center",
  };
  return (
    <>
      <div className="trips-grid">
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
      </div>
    </>
  );
};
export default TripsDisplay;
