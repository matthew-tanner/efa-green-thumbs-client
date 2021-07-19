import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'antd';

import DisplayTripActivities from './DisplayTripActivities'
import AddActivity from './AddActivity'

const TripActivityIndex = (props) => {
    const [tripActivities, setTripActivities] = useState([])

    console.log(`In TripActivityIndex -- token is ${props.token}`)
    console.log(`In TripActivityIndexs -- tripId is ${props.tripId}`)

    const fetchTripActivities = () => {
        console.log(`In fetchTripActivities -- token is ${props.token}`)
        console.log(`In fetchTripActivities -- tripId is ${props.tripId}`)
        fetch(`http://localhost:3000/activity/all/${props.tripId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
            .then((res) => res.json())
            .then((tripActivityData) => {
                setTripActivities(tripActivityData)
                console.log(tripActivityData)
            })
    }

    useEffect(() => {
        console.log(`In useEffect -- token is ${props.token}`)
        console.log(`In useEffect -- tripId is ${props.tripId}`)
        fetchTripActivities()
    }, [])

    return (
        <div style={{ }}>
            <Row >
                <Col span={8}>
                    <AddActivity 
                        inActivityName={'New Activity'} 
                        inActivityDescription={'This new activity will be super fun'}
                        inActivityCost={'$30/hour'}
                        fetcTripActivities={fetchTripActivities} 
                        token={props.token} />    
                </Col>
                <Col span={16}>
                    <DisplayTripActivities 
                        tripId={props.tripId} 
                        tripActivityList={tripActivities} 
                        fetchTripActivities={fetchTripActivities}
                        token={props.token}
                    />
                </Col>
            </Row>


        </div>
    )
}

export default TripActivityIndex
