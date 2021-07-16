
import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import "./activities.css";
import EditActivity from './EditActivity'


// ToDo: Trip and activities should be passed in as parameters (props?)
const TripActivities = () => {

let tripActivityList = [
{
   name: "Boating",
   description: "quiet lake",
   cost: "Free",
   notes: "looks like fun",
   tripId: 1,
   userId: 100
}]
    const [visible, setVisible] = useState(false);
    const { Meta } = Card;

    return (
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
                        >
                            <Meta
                                title="PUT ACTIITY NAME HERE"
                                bordered={true}
                                description="PUT OTHER ACTIVITY INFO HERE"
                            />

                            <Button
                                icon={<EditOutlined />}
                                onClick={() => { setVisible(true) }}
                            />

                            <Button
                                shape="circle"
                                style={{ color: 'black', zIndex: 10 }}
                                //   stopPropogation rec from https://stackoverflow.com/questions/61040013/ant-design-how-can-i-handle-button-in-card-extra-onclick-event
                                onClick={e => { e.stopPropagation(); console.log('DELETE THE ACTIVITY') }}
                            >
                                X
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
                        >
                            <Meta
                                title="PUT NEXT ACTIVITY NAME HERE"
                                bordered={true}
                                description="PUT MORE ACTIVITY INFO HERE"
                            />

                            <Button
                                icon={<EditOutlined />}
                                onClick={() => { setVisible(true) }}
                            />

                            <Button
                                shape="circle"
                                style={{ color: 'black', zIndex: 10 }}
                                //   stopPropogation rec from https://stackoverflow.com/questions/61040013/ant-design-how-can-i-handle-button-in-card-extra-onclick-event
                                onClick={e => { e.stopPropagation(); console.log('DELETE THE ACTIVITY') }}
                            >
                                X
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
                        >
                            <Meta
                                title="THIRD ACTIVITY"
                                bordered={true}
                                description="ACTIVITY INFO HERE"
                            />
                                                        <Button
                                icon={<EditOutlined />}
                                onClick={() => { setVisible(true) }}
                            />

                            <Button
                                shape="circle"
                                style={{ color: 'black', zIndex: 10 }}
                                //   stopPropogation rec from https://stackoverflow.com/questions/61040013/ant-design-how-can-i-handle-button-in-card-extra-onclick-event
                                onClick={e => { e.stopPropagation(); console.log('DELETE THE ACTIVITY') }}
                            >
                                X
                            </Button>
                        </Card>

                    </Col>
                </Row>
            </div>
            <EditActivity visible={visible} setVisible={setVisible} />

        </div>

    )
}

export default TripActivities

