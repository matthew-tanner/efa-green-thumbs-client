import React from 'react'

const TripsIndex = (props) => {
    const [trips,setTrips] = useState([])
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
        </>
    )
}
export default TripsIndex