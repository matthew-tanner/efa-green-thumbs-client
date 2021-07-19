import React, { useState, useCallback } from 'react';
import { Modal, Form, Input } from 'antd';

import "antd/dist/antd.css";

const EditActivity = (props) => {
  const [activityId, setActivityId] = useState(props.tripActivity.id)
  const [name, setName] = useState(props.tripActivity?.name)
  const [description, setDescription] = useState(props.tripActivity.description)
  const [cost, setCost] = useState(props.tripActivity.cost)
  const [notes, setNotes] = useState(props.tripActivity.notes)
  
  console.log('In EditActivity')
  console.log(props.tripActivity.name)
  console.log(props.tripActivity.id)

  const [formRef, setFormRef] = useState(null);

  const handleOk = () => {
    console.log('In handleOk -- DO SOMETHING WITH DATA THE USER ENTERED')
    console.log(notes)
    props.setVisible(false);
  };

  const handleCancel = () => {
    console.log('In handleCancel')
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
{/* ToDo: Emory suggested adding <Form onSubmit={activityUpdate}, making the Save button a type=submit, and doing a PUT fetch in activityUpdate.  How is this different from using the handleOk function? */}
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
