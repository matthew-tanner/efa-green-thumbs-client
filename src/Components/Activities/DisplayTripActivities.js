import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'antd';

import { EditOutlined } from '@ant-design/icons';

import EditActivity from './EditActivity'


const DisplayTripActivities = (props) => {
    const [visible, setVisible] = useState(false);
    const [delActivityId, setDelActivityId] = useState('')
    const { Meta } = Card;

    console.log(props.tripActivityList)

    const deleteActivity = (tripActivity) => {

        fetch(`http://localhost:3000/activity/${tripActivity.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
        .then(() => props.fetchTripActivities())
    }

    return (
        <div className="site-card-wrapper" >
            <div style={{ margin: 100 }} >
                <Row gutter={16}>

                    {props.tripActivityList.map(tripActivity => {
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
                                        icon={<EditOutlined />}
                                        onClick={() => { setVisible(true) }}
                                    />

                                    <Button
                                        shape="circle"
                                        style={{ color: 'black', zIndex: 10 }}
// ToDo: Doesn't consistently set the updActivityId to the right value
                                        // onClick={e => { setDelActivityId(tripActivity.id); handleDelete() }}
                                        onClick={() => {deleteActivity(tripActivity)}}
                                    >
                                        X
                                    </Button>
{/* POPULATES MODAL FORM WITH DATA FROM THE LAST CARD INSTEAD OF THE CARD BEING CLICKED. BASED ON CONSOLE LOG IN EDITACTIVITY, LOOKS LIKE ONCE VISIBLE IS TRUE, EDITACTIVITY IS BEING CALLED FOR EACH ITEM IN THE ARRAY. */}
                                    {visible 
                                        ? <EditActivity
                                            tripActivity={tripActivity}
                                            visible={visible}
                                            setVisible={setVisible}
                                        />
                                        : <></>
                                    }       
                                </Card>
                            </Col>
                        )
                    })}

                </Row>
            </div>
{/* DATA IS ON THE FORM, BUT ISN"T TIED TO THE MAPPED DATA */}
            {/* <EditActivity
                tripActivity={tripActivityList[0]}
                visible={visible}
                setVisible={setVisible}
            /> */}

        </div>
    )
}

export default DisplayTripActivities

