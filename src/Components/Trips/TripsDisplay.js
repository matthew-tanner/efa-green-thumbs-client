import React, { useState, useEffect} from 'react';
import { Table, Tag, Space, Row, Col, Card, } from 'antd';


const TripsDisplay = (props) => {
    const [trips, setTrips] = useState([])
    const {Meta} = Card
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
    console.log(trips);
    useEffect(() => {
        fetchTrips()
    }, [])

    const gridStyle = {
        width: '50%',
        textAlign: 'center',
        
      };
    
    return(
        <>
        Hello from Trips Display
        {/* <Table dataSource={data} columns={[]} /> */}
    <div className="view-trips-grid">
    <Card title="Trips">
     {trips.map(trip => {
         return (
                 <Card.Grid style={gridStyle}>
                     Trip Name: {trip.name}<br /> 
                     Activities: {trip.activities}<br />
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