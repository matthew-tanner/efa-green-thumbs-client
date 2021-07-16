import React, { useState, useCallback } from 'react';
import { Modal, Checkbox, Form, Input } from 'antd';


//  https://medium.com/@alef.duarte/using-ant-design-form-inside-a-modal-in-react-stateless-functional-component-634f33357c80

// https://ant.design/components/form/v3

import "antd/dist/antd.css";

const EditActivity = (props) => {
  const [name, setName] = useState(props.tripActivity?.name)
  const [description, setDescription] = useState(props.tripActivity.description)
  const [notes, setNotes] = useState(props.tripActivity.notes)

  console.log('In EditActivity')
  console.log(props.tripActivity.description)
  console.log(props.tripActivity.name)
  console.log(props.tripActivity.notes);

  const [formRef, setFormRef] = useState(null);

  const handleOk = () => {
    console.log('In handleOk -- DO SOMETHING WITH DATA THE USER ENTERED')
    props.setVisible(false);
  };

  const handleCancel = () => {
    console.log('In handleCancel')
    props.setVisible(false);
  };

  const handleCreate = () => {
    console.log('In handleCreate -- DO SOMETHING WITH DATA THE USER ENTERED')
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
        
        <Form layout="horizontal">

          <Form.Item label="Name">
            <Input name="name" value={name}/>
          </Form.Item>

          <Form.Item label="Description">
            <Input name="description" value={description}/>
          </Form.Item>

          <Form.Item label="Notes">
            <Input name="notes" value={notes}/>
          </Form.Item>

        </Form>
      </Modal>
    </>
  );
};

export default EditActivity
