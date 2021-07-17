
import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'antd';
import { EditOutlined } from '@ant-design/icons';

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
            notes: "",
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

    console.log(tripActivityList[0].name)
    const [visible, setVisible] = useState(false);
    const { Meta } = Card;

    // ToDo: delete activity from db and re-display the cards 
    const handleDelete = () => {
        console.log('In handleDelete -- DELETE THE ACTIVITY')
    }

    return (
        <div className="site-card-wrapper" >
            <div style={{ margin: 20 }} >
                <Row gutter={16}>

                    {tripActivityList.map(tripActivity => {
                        return (
                            <Col span={8}>
                                <Card
                                    className="activityCard"
                                    size="small"
                                    style={{ width: 300, margin: 10 }}
                                    cover={
                                        <img
                                            alt="Park Planner Logo"
                                            src="../../../assets/logo.png"
                                        />
                                    }
                                >
                                    <Meta
                                        title={tripActivity.name}
                                        bordered={true}
                                        description={tripActivity.description}
                                    />

                                    <Button
                                    // ToDo:  ASSIGN/SET VARIABLES SO THEY"RE VISIBLE IN EditActivity ???
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
                                    {/* POPULATES MODAL FORM WITH DATA FROM THE LAST CARD INSTEAD OF THE CARD BEING CLICKED */}
                                    {/* <EditActivity
                                        tripActivity={tripActivity}
                                        visible={visible}
                                        setVisible={setVisible}
                                    /> */}
                                </Card>
                            </Col>
                        )
                    })}

                </Row>
            </div>
            {/* DATA IS ON THE FORM, BUT ISN"T TIED TO THE MAPPED DATA */}
            <EditActivity
                tripActivity={tripActivityList[0]}
                visible={visible}
                setVisible={setVisible}
            />
            {/* {tripActivity} IS UNDEFINED HERE
            <EditActivity
                tripActivity={tripActivity}
                visible={visible}
                setVisible={setVisible}
            /> */}

        </div>

    )
}

export default TripActivities

