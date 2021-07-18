import React, { useState, useEffect} from 'react';
import TripsIndex from './TripsIndex';


const TripsDisplay = (props) => {
    const [trips, setTrips] = useState([])
    const fetchTrips = () => {
        fetch(`http://localhost:3000/trip/all`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI2NTQwOTA1LCJleHAiOjE2MjY2MjczMDV9.6kxokReFmJcOcA4Td1JymzvGk-ONFEtyuwuZxcB4yRE`
            })
        }).then((res) => res.json())
            .then((tripData) => {
                setTrips(tripData)
                console.log(tripData);
            }) .catch ((err) => console.log(err))
    }

    useEffect(() => {
        fetchTrips()
    }, [])

    return(
        <>
        Hello from Trips Display
        
        {/* <CreateTrips fetchTrips={fetchTrips} token={props.token} /> */}
        {/* <TripsTable fetchTrips= {fetchTrips} trips={trips} editUpdateTrips={editUpdateTrips} updateOn={updateOn} token={props.token} /> */}

        {/* {updateActive ? <TripEdit tripToUpdate={tripToUpdate} updateOff={updateOff} token={props.token} fetchTrips={f}} */}
        </>
    )
}
export default TripsDisplay