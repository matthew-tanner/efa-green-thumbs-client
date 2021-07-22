import React, { useEffect, useState } from 'react';

import DisplayTripActivities from './DisplayTripActivities'
import AddActivity from './AddActivity'
import EditActivity from './EditActivity'

const TripActivityIndex = (props) => {
    console.log(`In tripActivityIndex. tripId = ${props.tripId}, token = ${props.token}`)

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

        <div >
            <div className='tripDisplay'>
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
            </div>
            <div className='newActivity'>

{/* ToDo:  Need to fetch activities for a park, and let the user select them. */}
                <AddActivity
                    tripId={props.tripId}
                    inActivityName={'New Activity'}
                    inActivityDescription={'This new activity will be super fun'}
                    inActivityTitle={'Title of Activity'}
                    fetchTripActivities={fetchTripActivities}
                    token={props.token} />
            </div>
        </div>
    )
}

export default TripActivityIndex
