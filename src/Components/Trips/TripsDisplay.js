import React, { useState, useEffect} from 'react';
import { Card, Button, Link } from 'antd';
import { useHistory } from 'react-router-dom';
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



    const editTrips = (trip) => {
console.log(`In editTrips in TripsDisplay - trip = ${trip}`)
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
        width: '100%',
        textAlign: 'center',

      };
    // const cardGrid = {
    //     backgroundColor: '#FB743E'
    // }
    return(
        <>
<div className="trips-grid">
    <Card title="Trips">
     {trips.map(trip => {
         return (
             <div className="card-grid-style">
                 <Card.Grid style={gridStyle} >
                    {trip.name}<br />
                 <Button className="delete-button" onClick={() => {deleteTrips(trip)}}>Delete</Button><br />
                 <Button onClick={() => {editTrips(trip)}}>Edit</Button><br/>
                 <a href="/tripActivityIndex"><u>View And Edit Trips</u></a>
        {/* You'll want two buttons, one that updates and one that deletes  */}
                </Card.Grid>
                </div>
        )
     }
     )}
    </Card>
    </div>

        </>
    )
}
export default TripsDisplay
