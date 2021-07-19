import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'antd';

import DisplayTripActivities from './DisplayTripActivities'

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
        <>
            <div>
                <h3>Activities</h3>
            </div>
            <div>
                <DisplayTripActivities 
                    tripId={props.tripId} 
                    tripActivityList={tripActivities} 
                    fetchTripActivities={fetchTripActivities}
                    token={props.token}
                />
            </div>

        </>
    )
}

export default TripActivityIndex
