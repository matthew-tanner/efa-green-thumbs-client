import React, { useState, useEffect} from 'react';
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
            }) .catch ((err) => console.log(err))
    }

    const deleteTrips = (trip) => {
console.log(`In deleteTrips, trip = ${trip}`)
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



    const editTrips = (trip) => {
console.log(`In editTrips in TripsDisplay - tripId = ${trip.id}, name = ${trip.name}, trip = ${trip}`)
        return (
            <TripActivityIndex token={props.token} tripId={trip.id} />
        )

    }
    
    // const editTrips = (trip) => {
    //     fetch(`http://localhost:3000/trip/${trip.id}`, {
    //     method: 'PUT',
    //     headers: new Headers({
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${props.token}`
    //     })
    // }) .then (() => fetchTrips())
    //     .catch (err => console.log(err))
        
    // }

    useEffect(() => {
    console.log('In TripsDisplay useEffect')
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
                 <Button onClick={() => {editTrips(trip)}}>Edit</Button>
                 
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