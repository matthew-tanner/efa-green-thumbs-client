import React, { useState, useCallback } from 'react';
import { Modal, Checkbox, Form, Input } from 'antd';


//  https://medium.com/@alef.duarte/using-ant-design-form-inside-a-modal-in-react-stateless-functional-component-634f33357c80

// https://ant.design/components/form/v3

import "antd/dist/antd.css";

const EditActivity = (props) => {
  const [activityId, setActivityId] = useState(props.tripActivity.id)
  const [name, setName] = useState(props.tripActivity?.name)
  const [description, setDescription] = useState(props.tripActivity.description)
  const [notes, setNotes] = useState(props.tripActivity.notes)
  const [cost, setCost] = useState(props.tripActivity.cost)

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

          {/* <Form.Item label="Notes">
            <Input name="notes" value={notes}/>
          </Form.Item> */}

          {/* <Form.Item label="Name">
            <Input name="name" value={name}/>
          </Form.Item>

          <Form.Item label="Description">
            <Input name="description" value={description}/>
          </Form.Item>

          <Form.Item label="Cost">
            <Input name="cost" value={cost}/>
          </Form.Item> */}

        </Form>
      </Modal>
    </>
  );
};

export default EditActivity
