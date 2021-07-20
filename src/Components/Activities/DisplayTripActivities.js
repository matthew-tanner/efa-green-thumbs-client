import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'antd';

import { EditOutlined } from '@ant-design/icons';

import EditActivity from './EditActivity'


const DisplayTripActivities = (props) => {
    const [visible, setVisible] = useState(false);
    const { Meta } = Card;

    console.log('In DisplayTripActivities')
    console.log(props)
    console.log(props.tripActivityList)
    console.log(visible)

    // ToDo: delete activity from db and re-display the cards 
    const handleDelete = () => {
        console.log('In handleDelete -- DELETE THE ACTIVITY')
    }

    return (
        <div className="site-card-wrapper" >
            <div style={{ margin: 50 }} >
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
                                        onClick={e => { e.stopPropagation(); handleDelete() }}
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

