import React, { useState, useCallback } from 'react';
import { Modal, Button, Checkbox, Form, Input} from 'antd';

//  https://medium.com/@alef.duarte/using-ant-design-form-inside-a-modal-in-react-stateless-functional-component-634f33357c80

// https://ant.design/components/form/v3

import "antd/dist/antd.css";
// import "./styles.css";

const EditActivity = (props) => {

console.log('In EditActivity')

  const [formRef, setFormRef] = useState(null);

  const showModal = () => {
console.log('In showModal')
    props.setVisible(true);
  };
  
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
            title="Form within a Modal"
            okText="Submit"
            onCancel={handleCancel}
            onOk={handleOk}
        >
            <Form 
                layout="vertical" 
                initialValues={{
                    private: true,
                }}>
                    
                <Form.Item name="name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item className='checkbox' name="private" valuePropName="checked" wrapperCol={{ offset: -8, span: 17 }}>
                    <Checkbox className='portalCardTypography'>Private</Checkbox>
                </Form.Item>
            </Form>
        </Modal>
    </>
  );
};

export default EditActivity
