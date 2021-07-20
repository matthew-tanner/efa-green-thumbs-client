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
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI2Nzg1MzE0LCJleHAiOjE2MjY4NzE3MTR9.BHVccVtf-xSKiKuUIAr5uPAZfBvi9f7C-dub0w07u1E`
            })
        }).then((res) => res.json())
            .then((tripData) => {
                setTrips(tripData)
                console.log(tripData);
            }) .catch ((err) => console.log(err))
    }
    const deleteTrips = (trip) => {
        fetch(`http://localhost:3000/trip/${trip.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI2Nzg1MzE0LCJleHAiOjE2MjY4NzE3MTR9.BHVccVtf-xSKiKuUIAr5uPAZfBvi9f7C-dub0w07u1E`
        })
    }) .then (() => fetchTrips())
        .catch (err => console.log(err))
        
    }
    // console.log(deleteTrips());
// in our delete and edit we need to find a way to drill into trips for trip id in the url
    const editTrips = (trip) => {
        fetch(`http://localhost:3000/trip/${trip.id}`, {
        method: 'PUT',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI2Nzg1MzE0LCJleHAiOjE2MjY4NzE3MTR9.BHVccVtf-xSKiKuUIAr5uPAZfBvi9f7C-dub0w07u1E`
        })
    }) .then (() => fetchTrips())
        .catch (err => console.log(err))
        
    }
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