import React, { useState, useEffect} from 'react';
import { Table, Tag, Space, Row, Col, Card } from 'antd';


const TripsDisplay = (props) => {
    const [trips, setTrips] = useState([])
    const fetchTrips = () => {
        console.log('Inside of fetch trip');
        fetch(`http://localhost:3000/trip/all`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI2NjMzNzg3LCJleHAiOjE2MjY3MjAxODd9.Pj7kI423ySCXP55Zbv9160BKk5J2_NiMpMCH-oeTXcs`
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
    // const data = [
    //     {
    //        name: trips.map(trip => trip.name),
    //        activities: trips.map(trip => trip.activities),
    //        isPublic: trips.map(trip => trip.public)

    //     }
    // ]
    // console.log(data);
    // const columns = [
    //     {
    //         title: 'Park Name',
    //         dataIndex: 'name',
    //         key: 'name',
            
    //     },
    //     {
    //         title: 'Activities',
    //         dataIndex: 'activities',
    //         key: 'activities',
            
    //     },
    //     {
    //         title: 'Public',
    //         dataIndex: 'public',
    //         key: 'public',
            
    //     }
    // ]
    // console.log(columns);
    let card = () => {
        
    }

    return(
        <>
        Hello from Trips Display
        {/* <Table dataSource={data} columns={[]} /> */}
    
    <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={true}>
            <p>{"name: " + trips.map(trip => trip.name)}</p>

           <p>{"activities:" + trips.map(trip => trip.activities)}</p>
           <p>{"isPublic:" + trips.map(trip => trip.public)}</p>
        </Card>
      </Col>
      </Row>
  </div>,
        
        </>
    )
}
export default TripsDisplay