import React, { useState, useCallback } from 'react';
import { Button, Card, Form, Input } from 'antd';

import "antd/dist/antd.css";

const AddActivity = (props) => {
    const [activityId, setActivityId] = useState('')
    const [name, setName] = useState(props.inActivityName)
    const [description, setDescription] = useState(props.inActivityDescription)
    const [cost, setCost] = useState(props.inActivityCost)
    const [notes, setNotes] = useState('')

    const handleSubmit = () => {
        fetch(`http://localhost:3000/activity/create/${props.tripId}`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            }),
            body: JSON.stringify({ 
                notes: notes, 
                name: name, 
                description: description, 
                cost: cost 
            })
        })
            .then(res => res.json())
            .then(activityData => {
                setNotes('')
                props.fetchTripActivities()
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (

        <div className='site-card-border-less-wrapper'>

{/* To-Do:  Put these h1's in to push the card down.  Not sure why that's need or where the h1s are being displayed */}
<h1>Top</h1>
<h1>Top</h1>

            <Card bordered={true} style={{ margin: 30 }}>
                <p>{name} -- {description}</p>
                <p>Cost:  {cost} </p>

                <Form
                    name="basic">
                    <Form.Item>
                        <label htmlFor="notes" />
                        <Input name="notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" onClick={handleSubmit}>Save</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
export default AddActivity