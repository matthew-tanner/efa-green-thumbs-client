import React, { useState } from 'react'
import { Form, Input, Button, Switch } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const CreateTrips = (props) => {
    const [name, setName] = useState(props.park) 
    const [pub, setPub] = useState(false)
    //const [parks, setParks] = useState([])
    const handleSubmit = (e) => {        
        fetch(`http://localhost:3000/trip/create`, {
            method: 'POST',
            body: JSON.stringify({name: name , public: pub}),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${props.token}`
            })
        }) .then((res) => res.json())
        .then((tripData) => {
            setName(props.park)
            console.log(name)
            //setName(props.park)
            setPub(false)
            props.fetchTrips()
             
        })
    }
    function onChange(checked) {
        console.log(`switch to ${checked}`);
        setPub(checked)
      }
    //props.FetchParks()

    //we need a way to add a park and activity to the trip. Maybe on the back end 
    //creating an entry to the Trips model that speaks to the fetched data on the front end.
    // Maybe we pass the results from FetchPark.js in as a prop 
    return(
        <>
   <Form onFinish={handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      > 
      <Form.Item label="Trip Name">
        <span className="ant-form-text">{name}</span>
      </Form.Item>
      <Form.Item name="public" label="Public" valuePropName="checked">
        <Switch defaultChecked onChange={onChange} />
      </Form.Item>
      <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          </ Form.Item>
      </Form>
        </>
    )
}
export default CreateTrips