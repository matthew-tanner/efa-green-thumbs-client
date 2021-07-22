import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';

import TripActivityIndex from '../Activities/TripActivityIndex'

const TripsDisplay = (props) => {
    const [trips, setTrips] = useState([])

    const fetchTrips = () => {
        console.log(`In TripsDisplay fetchTrips`)
        fetch(`http://localhost:3000/trip/all`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((tripData) => {
                console.log(tripData)
                setTrips(tripData)
                console.log(trips);
            }).catch((err) => console.log(err))
    }

    const deleteTrips = (trip) => {
        console.log(`In deleteTrips, trip = ${trip}`)
        fetch(`http://localhost:3000/trip/${trip.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then(() => fetchTrips())
            .catch(err => console.log(err))

    }


    const editTrips = (trip) => {
        console.log(`In editTrips in TripsDisplay - tripId = ${trip.id}, name = ${trip.name}, token = ${props.token} and trip = ${trip}`)
        
// ToDo: The TripActivityIndex component doesn't execute here.  
//   - We tried using a Route here (so that TripActivityIndex is a child of TripsDisplay, 
//     instead of a peer of TripsDisplay), but that didn't work.  
//   - We were able to get the TripActivityIndex page to show using a Link on the Button 
//     in TripsDisplay's return, but, we can't pass the trip.id and props.token via a Link.  
//   - We also tried Redirect but it has the same limitation as Link.
        return (
            <>
                <div>
                    <TripActivityIndex token={props.token} tripId={trip.id} />
                </div>
            </>
        )

    }

    useEffect(() => {
        fetchTrips()
    }, [])

    const gridStyle = {
        width: '50%',
        textAlign: 'center',

    };

    return (
        <>
            <div className="view-trips-grid">
                <Card title="Trips" >
                    {trips.map(trip => {
                        return (
                            <Card.Grid style={gridStyle}>
                                Trip Name: {trip.name}<br />
                                <Button onClick={() => { deleteTrips(trip) }}>Delete</Button>
                                <Button onClick={() => { editTrips(trip) }}>Edit</Button>
                            </Card.Grid>
                        )
                    }
                    )}
                </Card>
            </div>
        </>
    )
}
export default TripsDisplay