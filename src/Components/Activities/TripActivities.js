
import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import "./activities.css";
import EditActivity from './EditActivity'


const TripActivities = () => {
    const [visible, setVisible] = useState(false);
    const { Meta } = Card;

return (

// ToDo: Would a scrolling list be better?  See https://ant.design/components/list/
        <div className="site-card-wrapper" >
            <div className="trip-activities">
                <Row gutter={16}>
                    <Col span={8}>

                        <Card
                            className="activityCard"
                            cover={
                                <img
                                    alt="Park Planner Logo"
                                    src="../../../assets/logo.png"
                                />
                            }
                            extra={
                                <Button
                                  type="danger"
                                  shape="circle"
                                  style={{ color: 'white', zIndex: 10 }}
                                //   stopPropogation rec from https://stackoverflow.com/questions/61040013/ant-design-how-can-i-handle-button-in-card-extra-onclick-event
                                  onClick = {e => { e.stopPropagation(); console.log('DELETE THE ACTIVITY')}}
                                >
                                  X
                                </Button>
                              }
                        >
                            <Meta
                                title="PUT ACTIITY NAME HERE"
                                bordered={true}
                                description="PUT OTHER ACTIVITY INFO HERE"
                            />

                            <Button onClick = {() => {setVisible(true)}}>
                              Edit
                            </Button>
                        </Card>
                    </Col>

                    <Col span={8}>
                        <Card
                            className="activityCard"
                            cover={
                                <img
                                    alt="Park Planner Logo"
                                    src="../../../assets/logo.png"
                                />
                            }
                            actions={[
                                <EditOutlined key="edit" onClick= {e => { e.stopPropagation(); console.log('EDIT THE ACTIVITY')}}/>
                            ]}
                        >
                            <Meta
                                title="PUT NEXT ACTIVITY NAME HERE"
                                bordered={true}
                                description="PUT MORE ACTIVITY INFO HERE"
                            />
                        </Card>
                    </Col>

                    <Col span={8}>
                        <Card
                            className="activityCard"
                            cover={
                                <img
                                    alt="Park Planner Logo"
                                    src="../../../assets/logo.png"
                                />
                            }
                            actions={[
                                <EditOutlined key="edit" onClick= {e => { e.stopPropagation(); console.log('EDIT THE ACTIVITY')}}/>
                            ]}
                        >
                            <Meta
                                title="THIRD ACTIVITY"
                                bordered={true}
                                description="ACTIVITY INFO HERE"
                            />
                        </Card>

                    </Col>
                </Row>
            </div>
            <EditActivity visible={visible} setVisible={setVisible} />

        </div>

    )
}

export default TripActivities

