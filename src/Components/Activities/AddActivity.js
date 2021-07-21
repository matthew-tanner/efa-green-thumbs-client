import React, { useState, useCallback } from 'react';
import { Button, Card, Form, Input } from 'antd';

import "antd/dist/antd.css";

// ToDo: Add location, url, image
const AddActivity = (props) => {
    const [activityId, setActivityId] = useState('')
    const [name, setName] = useState(props.inActivityName)
    const [description, setDescription] = useState(props.inActivityDescription)
    const [title, setTitle] = useState(props.inTitle)
    const [notes, setNotes] = useState('')

    const handleSubmit = () => {
        fetch(`http://localhost:3000/activity/create/${props.tripId}`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            }),
            body: JSON.stringify({ 
                tripId: props.tripId,
                notes: notes, 
                name: name, 
                description: description, 
                title: title
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

            <Card bordered={true} style={{ margin: 30 }}>
                <p>{name} -- {description}</p>
                <p>Title: {title}</p>

                <Form
                    name="basic">
                    <Form.Item>
                        <label htmlFor="notes" />
                        <Input name="notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" onClick={handleSubmit}>Save</Button>
                    </Form.Item>
{/* ToDo: Add a cancel button */}
                </Form>
            </Card>
        </div>
    )
}
export default AddActivity