import React, { useState, useEffect} from 'react';
import { Card, Button } from 'antd';
import DisplayTripActivities from '../Activities/DisplayTripActivities';

const TripsDisplay = (props) => {
    const [trips, setTrips] = useState([])
    
    const fetchTrips = () => {
       fetch(`http://localhost:3000/trip/all`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((tripData) => {
                setTrips(tripData)
                console.log(tripData);
            }) .catch ((err) => console.log(err))
    }
    console.log(trips);
    const deleteTrips = (trip) => {
        fetch(`http://localhost:3000/trip/${trip.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${props.token}`
        })
    }) .then (() => fetchTrips())
        .catch (err => console.log(err))
        
    }
    // console.log(deleteTrips());
// in our delete and edit we need to find a way to drill into trips for trip id in the url
    useEffect(() => {
        fetchTrips()
    }, [])

    const gridStyle = {
        width: '50%',
        textAlign: 'center',

      };

    return(
        <>
    <div className="view-trips-grid">
    <Card title="Trips" >
     {trips.map(trip => {
         return (
                 <Card.Grid style={gridStyle}>
                    Trip Name: {trip.name}<br /> 
                 <Button onClick={() => {deleteTrips(trip)}}>Delete</Button>
                 
                 
        {/* You'll want two buttons, one that updates and one that deletes  */}
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