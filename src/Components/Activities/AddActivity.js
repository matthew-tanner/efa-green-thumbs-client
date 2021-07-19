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
        console.log(`In handleSubmit - notes --> ${notes}`)
    }

    return (

        <div className='site-card-border-less-wrapper'>
            <Card bordered={true} style={{ margin: 10 }}>
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