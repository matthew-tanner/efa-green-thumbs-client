import React, { useState, useCallback } from 'react';
import { Modal, Form, Input } from 'antd';

import "antd/dist/antd.css";

const EditActivity = (props) => {
  const [activityId, setActivityId] = useState(props.activityToUpdate.id)
  const [name, setName] = useState(props.activityToUpdate.name)
  const [description, setDescription] = useState(props.activityToUpdate.description)
  const [cost, setCost] = useState(props.activityToUpdate.cost)
  const [notes, setNotes] = useState(props.activityToUpdate.notes)
  
  console.log(`In EditActivity - visible is ${props.visible}`)
  console.log(props.activityToUpdate.name)
  console.log(props.activityToUpdate.id)

  const [formRef, setFormRef] = useState(null);

  const handleOk = () => {
    console.log(`In handleOk - Id is ${activityId}, notes= ${notes}`)
    console.log (props.activityToUpdate)

    fetch(`http://localhost:3000/activity/${props.activityToUpdate.id}`, {
        method: 'PUT',
        body: JSON.stringify({notes: notes}),
        headers: new Headers({ 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${props.token}`
        })
    })
    .then((res) => {
        props.fetchTripActivities()
        props.updateOff()
        props.setVisible(false)
    })
  }

  const handleCancel = () => {
    console.log('In handleCancel')
    props.updateOff()
    props.setVisible(false);
  };

  const saveFormRef = useCallback(node => {
    if (node !== null) {
      setFormRef(node);
    }
  }, []);

  return (
    <>
      <Modal
        visible={props.visible}
        title="Edit your Notes for the activity"
        okText="Save"
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <p>{name} -- {description}</p>
        <p>Cost:  {cost} </p>
        <Form
          layout="horizontal"
        >
          
          <Form.Item label="Notes">
            <Input 
              name="notes" value={notes}
              onChange={(e) => { setNotes(e.target.value) }} 
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditActivity
