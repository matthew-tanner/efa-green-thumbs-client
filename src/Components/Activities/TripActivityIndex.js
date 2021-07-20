import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';

import DisplayTripActivities from './DisplayTripActivities'
import AddActivity from './AddActivity'
import EditActivity from './EditActivity'

const TripActivityIndex = (props) => {
    const [tripActivities, setTripActivities] = useState([])
    const [updateActive, setUpdateActive] = useState(false)
    const [activityToUpdate, setActivityToUpdate] = useState({})
    const [visible, setVisible] = useState(false);

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

    const editUpdateActivity = (tripActivity) => {
        setActivityToUpdate(tripActivity)
        console.log(tripActivity)
    }

    const updateOn = () => {
        setUpdateActive(true)
    }

    const updateOff = () => {
        setUpdateActive(false)
    }

    useEffect(() => {
        fetchTripActivities()
    }, [])

    return (
        
        <div className='tripDisplay'>
            <div>
            <Row>
                {/* <Col span={3}>
                    
                </Col> */}
                <Col>
                    <DisplayTripActivities
                        tripId={props.tripId}
                        tripActivityList={tripActivities}
                        editUpdateActivity={editUpdateActivity}
                        updateOn={updateOn}
                        fetchTripActivities={fetchTripActivities}
                        visible={visible}
                        setVisible={setVisible}
                        token={props.token}
                    />
                </Col>

                {updateActive
                    ? <EditActivity
                        activityToUpdate={activityToUpdate}
                        updateOff={updateOff}
                        token={props.token}
                        fetchTripActivities={fetchTripActivities}
                        visible={visible}
                        setVisible={setVisible}
                    />
                    : <></>
                }
            </Row>
        </div>
        <div>

            <Row>
                {/* ToDo:  Fix harded data */}
                <AddActivity
                    tripId={props.tripId}
                    inActivityName={'New Activity'}
                    inActivityDescription={'This new activity will be super fun'}
                    inActivityCost={'$30/hour'}
                    fetchTripActivities={fetchTripActivities}
                    token={props.token} />
            </Row>
        </div>
        </div>
    )
}

export default TripActivityIndex
