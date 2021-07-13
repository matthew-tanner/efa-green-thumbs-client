import React, { useState } from 'react'
import { Form, Input, Button, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const CreateTrips = (props) => {
    const [name, setName] = useState('') 
    const [public, setPublic] = useState(false)
    //const [parks, setParks] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/trip/create`, {
            method: 'POST',
            body: JSON.stringify({name: name, public: public}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${props.token}`
            })
        }) .then((res) => res.json())
        .then((tripData) => {
            setName('')
            //setName(props.park)
            setPublic(false)
            props.fetchTrips()
             
        })
    }
    
    //props.FetchParks()

    //we need a way to add a park and activity to the trip. Maybe on the back end 
    //creating an entry to the Trips model that speaks to the fetched data on the front end.
    // Maybe we pass the results from FetchPark.js in as a prop 
    return(
        <>

        </>
    )
}
export default CreateTrips