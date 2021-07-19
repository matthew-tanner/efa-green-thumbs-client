import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';

import DisplayTripActivities from './DisplayTripActivities'
import AddActivity from './AddActivity'

const TripActivityIndex = (props) => {
    const [tripActivities, setTripActivities] = useState([])

    const fetchTripActivities = () => {
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
            })
    }

    useEffect(() => {
        fetchTripActivities()
    }, [])

    return (
        <div style={{ }}>
            <Row >
                <Col span={8}>
{/* ToDo:  Fix harded data */}
                    <AddActivity 
                        tripId={props.tripId}
                        inActivityName={'New Activity'} 
                        inActivityDescription={'This new activity will be super fun'}
                        inActivityCost={'$30/hour'}
                        fetchTripActivities={fetchTripActivities} 
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
