import { Button, Card, Col, Row } from 'antd';
import { EditOutlined, FormOutlined } from '@ant-design/icons';

import "./activities.css";

const TripActivities = () => {
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
                            actions={[
                                <EditOutlined key="edit" />
                            ]}
                        >
                            <Meta
                                title="PUT ACTIITY NAME HERE"
                                bordered={true}
                                description="PUT OTHER ACTIVITY INFO HERE"
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
                                <EditOutlined key="edit" />
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
                                <EditOutlined key="edit" />
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

        </div>

    )
}

export default TripActivities

