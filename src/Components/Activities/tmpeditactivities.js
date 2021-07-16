import React, { useState, useCallback } from 'react';
import { Modal, Checkbox, Form, Input} from 'antd';

//  https://medium.com/@alef.duarte/using-ant-design-form-inside-a-modal-in-react-stateless-functional-component-634f33357c80

// https://ant.design/components/form/v3

import "antd/dist/antd.css";

const EditActivity = (props) => {

console.log('In EditActivity')

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
            <Form 
                layout="vertical" 
                initialValues={{name: props.tripActivityList[0].name}}
//                 initialValues={
// // ToDo: populate with info stored in the db, including notes
//                     {name: props.tripActivityList[0].name},
//                     {description: props.tripActivityList[0].description},
//                     {notes: props.tripActivityList[0].notes}
//                 }
              >
                    
                <Form.Item 
                  label="Activity Name"
                  name="name" 
                  rules={[{ required: false }]} 
                >
                    {/* <Input /> */}
                </Form.Item>
                
                <Form.Item 
                  label="Description"
                  name="description"
                  rules={[{ required: false }]}
                >
                    {/* <Input /> */}
                </Form.Item>
                
                <Form.Item 
                  label="Notes"
                  name="notes" 
                  rules={[{ required: false }]}
                >
                    <Input />
                </Form.Item>

                {/* <Form.Item className='checkbox' name="private" valuePropName="checked" wrapperCol={{ offset: -8, span: 17 }}>
                    <Checkbox className='portalCardTypography'>Private</Checkbox>
                </Form.Item> */}
            </Form>
        </Modal>
    </>
  );
};

export default EditActivity
