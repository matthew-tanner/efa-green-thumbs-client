import React from "react";
import { Modal, Form, Input, Checkbox } from "antd";

const EditActivityNote = ({ visible, onCancel, onCreate, form }) => {
    //   const { getFieldDecorator } = form;
    return (
        <Modal
            visible={visible}
            title="Form within a Modal"
            okText="Submit"
            onCancel={onCancel}
            onOk={onCreate}
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

                {/* <Form.Item className="collection-create-form_last-form-item">
          {getFieldDecorator("modifier", {
            initialValue: "public"
          })(
            <Radio.Group>
              <Radio value="public">Public</Radio>
              <Radio value="private">Private</Radio>
            </Radio.Group>
          )}
        </Form.Item> */}
            </Form>
        </Modal>
    );
};

export default EditActivityNote;

