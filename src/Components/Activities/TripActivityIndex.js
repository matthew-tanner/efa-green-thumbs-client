import React, { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom'
import DisplayTripActivities from './DisplayTripActivities'
import EditActivity from './EditActivity'
import APIURL from "../../Utils/Environment";


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
                    parkCode={parkCode}
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
            </div>
        </div>
    )
}

export default TripActivityIndex
