import React, { useEffect, useState } from 'react';
import DisplayTripActivities from './DisplayTripActivities'
import AddActivity from './AddActivity'
import EditActivity from './EditActivity'
import APIURL from "../../Utils/Environment";
import { useLocation} from 'react-router-dom'

const TripActivityIndex = (props) => {

    const location = useLocation()
    const parkCode = location.state.parkCode
    const token = location.state.token
    const tripId = location.state.tripId
    const [tripActivities, setTripActivities] = useState([])
    const [updateActive, setUpdateActive] = useState(false)
    const [activityToUpdate, setActivityToUpdate] = useState({})
    const [visible, setVisible] = useState(false);

    const fetchTripActivities = () => {
        fetch(`${APIURL}/activity/all/${tripId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        })
            .then((res) => res.json())
            .then((tripActivityData) => {
                console.log("trip activity data" ,tripActivityData);
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
                    tripId={tripId}
                    tripActivityList={tripActivities}
                    editUpdateActivity={editUpdateActivity}
                    updateOn={updateOn}
                    fetchTripActivities={fetchTripActivities}
                    visible={visible}
                    setVisible={setVisible}
                    token={token}
                />

                {updateActive
                    ? <EditActivity
                        activityToUpdate={activityToUpdate}
                        updateOff={updateOff}
                        token={token}
                        fetchTripActivities={fetchTripActivities}
                        visible={visible}
                        setVisible={setVisible}
                    />
                    : <></>
                }
            </div>
            <div className='newActivity'>

{/* ToDo:  Need to fetch activities for a park, and let the user select them. This component was a fill-in 
for getting and storing the Notes, but that won't be necessary if we add Activities to a Trip using a 
method similar menu selector used with Trip Planner.*/}
                {/* <AddActivity
                    tripId={props.tripId}
                    inActivityName={'New Activity'}
                    inActivityDescription={'This new activity will be super fun'}
                    inActivityTitle={'Title of Activity'}
                    fetchTripActivities={fetchTripActivities}
                    token={props.token} /> */}
            </div>
        </div>
    )
}

export default TripActivityIndex
