import React from 'react'

const TripsIndex = (props) => {
    const [trips, setTrips] = useState([])
    const fetchTrips = () => {
        fetch(`http://localhost:3000/:id`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((tripData) => {
                setTrips(tripData)
            })
    }

    useEffect(() => {
        fetchTrips()
    }, [])

    return(
        <>
        <CreateTrips fetchTrips={fetchTrips} token={props.token} />
        {/* <TripsTable fetchTrips= {fetchTrips} trips={trips} editUpdateTrips={editUpdateTrips} updateOn={updateOn} token={props.token} /> */}

        {/* {updateActive ? <TripEdit tripToUpdate={tripToUpdate} updateOff={updateOff} token={props.token} fetchTrips={f}} */}
        </>
    )
}
export default TripsIndex