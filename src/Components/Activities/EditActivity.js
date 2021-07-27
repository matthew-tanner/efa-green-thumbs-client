import React, { useCallback, useState, } from 'react';
import { Form, Input, Modal } from 'antd';
import APIURL from "../../Utils/Environment";
import "antd/dist/antd.css";

const EditActivity = (props) => {
  const [activityId, setActivityId] = useState(props.activityToUpdate.id)
  const [notes, setNotes] = useState(props.activityToUpdate.notes)

  const [formRef, setFormRef] = useState(null);

  const handleOk = () => {

    fetch(`${APIURL}/activity/${props.activityToUpdate.id}`, {
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
        <p>{props.activityToUpdate.title} </p>
        <p>{props.activityToUpdate.name} -- {props.activityToUpdate.description}</p>
        <p>Location:  {props.activityToUpdate.location}</p>
        
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
