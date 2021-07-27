import { Button, Card, Col, Divider, message, Row, Select } from 'antd';

import { EditOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import APIURL from "../../Utils/Environment";

const DisplayTripActivities = (props) => {

    const [getActivities, setGetActivities] = useState(true)
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [activitiesList, setActivitiesList] = useState([]);
    const { Option } = Select;

    const { Meta } = Card;

    const deleteActivity = (tripActivity) => {

        fetch(`${APIURL}/activity/${tripActivity.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        })
            .then(() => {
                message.success("Activity deleted from this Trip")
                props.fetchTripActivities()
            })
    }


    const fetchActivities = () => {
        fetch(`https://developer.nps.gov/api/v1/thingstodo?parkCode=${props.parkCode}&api_key=juZPWoiLqGQacPwyNwSLvePhqziqUeEAyhmebarc`)

            .then((response) => response.json())
            .then((data) => {
                setActivitiesList(
                    data.data.map((x) => {
                        return {
                            id: x.id,
                            name: x.activities[0].name,
                            title: x.title,
                            location: x.location,
                            shortDescription: x.shortDescription,
                            url: x.url,
                            image: x.images[0].url,
                        };
                    })
                );

            }).catch(err => {
                console.error(err)
            });
    };

    useEffect(() => {
        if (getActivities) {
            fetchActivities()
            setGetActivities(false)
        }
    }, [])

    const selectActivities = () => {
        return (
            <>
                <Select
                    mode="multiple"
                    showSearch
                    style={{ width: 300 }}
                    placeholder="Select an Activity"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    onChange={onChangeActivity}
                >
                    {activitiesList.map((x) => (
                        <Option key={x.id} value={x.title}>
                            {x.title}
                        </Option>
                    ))}
                </Select>
            </>
        );
    };

    const onChangeActivity = (value) => {
        setSelectedActivities(value);
    };

    const createActivities = (e) => {
        const actData = [];
        activitiesList.map((x) => {
          return selectedActivities.forEach((item, index, array) => {
            if (item === x.title) {
              actData.push({
                name: x.name,
                tripId: props.tripId,
                description: x.shortDescription,
                location: x.location,
                title: x.title,
                url: x.url,
                image: x.image,
              });
            }
          });
        });
    
        fetch(`${APIURL}/activity/create/${props.tripId}`, {
          method: "POST",
          body: JSON.stringify(actData),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `Bearer ${props.token}`,
          }),
        }).then((response) => {
            props.fetchTripActivities()
        })
      };

    const showCreateButton = () => {
        return (
          <>
            <Divider />
            <Button type="primary" onClick={() => createActivities()}>
              Add Activities
            </Button>
          </>
        );
      };

    return (
        <div>
            <h1>Trip Activities</h1>
            <div className="site-card-wrapper" >
                <div >
                    <Row >
                        {props.tripActivityList.map(tripActivity => {
                            return (
                                <Col>
                                    <Card
                                        className="activityCard"
                                        size="small"
                                        style={{ width: 300, margin: 10 }}
                                        cover={
                                            <img alt="National Park Service" src={tripActivity.image} />
                                            // <img
                                            //     alt="Park Planner Logo"
                                            //     src="../../../assets/logo.png"
                                            // />
                                        }
                                    >
                                        <Meta
                                            title={tripActivity.title}
                                            bordered="true"
                                            description={tripActivity.description}
                                        />
                                        <p>{tripActivity.notes}</p>

                                        <Button
                                            icon={<EditOutlined />}
                                            onClick={() => { props.editUpdateActivity(tripActivity); props.setVisible(true); props.updateOn() }}
                                        />

                                        <Button
                                            shape="circle"
                                            style={{ color: 'black', zIndex: 10 }}
                                            onClick={() => { deleteActivity(tripActivity) }}
                                        >
                                            X
                                        </Button>
                                    </Card>
                                </Col>
                            )
                        })}

                    </Row>
                </div>
            </div>
            <div className="tripDiv">
                <div>
                    <h3>Add More Activities</h3>
                </div>
                <div>{selectActivities()}</div>
                <div>{selectedActivities.length > 0 ? showCreateButton() : <></>}</div>
            </div>
        </div>
    )
}

export default DisplayTripActivities