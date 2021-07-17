
import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import "./activities.css";
import EditActivity from './EditActivity'


// ToDo: Trip and activities should be passed in as parameters (props?)
const TripActivities = () => {

let tripActivityList = [
{
   id: 1,
   name: "Boating",
   description: "quiet lake",
   cost: "$50/hour rental",
   notes: "looks like fun",
   tripId: 1,
   userId: 100
},
{
    id: 2,
    name: "Hiking",
    description: "Easy terrain",
    cost: "Free",
    notes: "Crowded",
    tripId: 1,
    userId: 100
 },
 {
    id: 3,
    name: "Mountain Biking",
    description: "Advanced trail",
    cost: "Free",
    notes: "Scarry steep drop-offs",
    tripId: 1,
    userId: 100
 },
 {
    id: 4,
    name: "Nature Center",
    description: "History of park, ranger programs, music",
    cost: "Free",
    notes: "Good recommendations for trails",
    tripId: 1,
    userId: 100
 }
]

console.log (tripActivityList[0].name)
    const [visible, setVisible] = useState(false);
    const { Meta } = Card;

    const handleDelete = () => {
        console.log('In handleDelete -- DELETE THE ACTIVITY' )
    }

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
                                title={tripActivityList[0].name}
                                bordered={true}
                                description={tripActivityList[0].description}
                            />

                            <Button
                                icon={<EditOutlined />}
                                onClick={() => { setVisible(true) }}
                            />

                            <Button
                                shape="circle"
                                style={{ color: 'black', zIndex: 10 }}
                                //   stopPropogation rec from https://stackoverflow.com/questions/61040013/ant-design-how-can-i-handle-button-in-card-extra-onclick-event
                                onClick={e => { e.stopPropagation(); handleDelete() }}
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
                                title={tripActivityList[1].name}
                                bordered={true}
                                description={tripActivityList[1].description}
                            />

                            <Button
                                icon={<EditOutlined />}
                                onClick={() => { setVisible(true) }}
                            />

                            <Button
                                shape="circle"
                                style={{ color: 'black', zIndex: 10 }}
                                //   stopPropogation rec from https://stackoverflow.com/questions/61040013/ant-design-how-can-i-handle-button-in-card-extra-onclick-event
                                onClick={e => { e.stopPropagation(); handleDelete() }} 
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
                                title={tripActivityList[2].name}
                                bordered={true}
                                description={tripActivityList[2].description}
                            />
                                                        <Button
                                icon={<EditOutlined />}
                                onClick={() => { setVisible(true) }}
                            />

                            <Button
                                shape="circle"
                                style={{ color: 'black', zIndex: 10 }}
                                //   stopPropogation rec from https://stackoverflow.com/questions/61040013/ant-design-how-can-i-handle-button-in-card-extra-onclick-event
                                onClick={e => { e.stopPropagation(); handleDelete() }}
                            >
                                X
                            </Button>
                        </Card>

                    </Col>
                </Row>
            </div>
            <EditActivity 
                tripActivity={tripActivityList[0]} 
                visible={visible} 
                setVisible={setVisible} 
            />

        </div>

    )
}

export default TripActivities

