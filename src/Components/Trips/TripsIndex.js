import React, { useState, useEffect } from "react";
import { Select, Button, Divider, Form, Switch, Modal} from "antd";
import { useHistory } from "react-router-dom";
import TripsDisplay from "./TripsDisplay";

const TripsIndex = (props) => {
  const history = useHistory();
  const [stateId, setStateId] = useState("");
  const [parkCode, setParkCode] = useState("");
  const [parkName, setParkName] = useState("");
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [activitiesList, setActivitiesList] = useState([]);
  const [parksList, setParksList] = useState([]);
  const [trips, setTrips] = useState([])
  const [pub, setPub] = useState(false)
  const { Option } = Select;
  const statesList = [
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FM",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  useEffect(() => {
    if (stateId !== "") {
      getParks();
    }
    if (parkCode !== "") {
      getActivities();
    }
  }, [stateId, parkCode]);

  const onChangeState = (value) => {
    setStateId(value);
  };

  const onChangePark = (value) => {
    setParkCode(value);
  };

  const onChangeActivity = (value) => {
    setSelectedActivities(value);
  };

  const getParks = (e) => {
    fetch(
      `https://developer.nps.gov/api/v1/parks?stateCode=${stateId}&api_key=juZPWoiLqGQacPwyNwSLvePhqziqUeEAyhmebarc`
    )
      .then((response) => response.json())
      .then((data) => {
        setParksList(
          data.data.map((x) => {
            return {
              fullName: x.fullName,
              parkCode: x.parkCode,
            };
          })
        );
      });
  };

  const getActivities = (e) => {
    fetch(
      `https://developer.nps.gov/api/v1/thingstodo?parkCode=${parkCode}&api_key=juZPWoiLqGQacPwyNwSLvePhqziqUeEAyhmebarc`
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.data[0].relatedParks[0].fullName);
        setParkName(data.data[0].relatedParks[0].fullName);
        setActivitiesList(
          data.data.map((x) => {
            return {
              name: x.activities[0].name,
              title: x.title,
              location: x.location,
              shortDescription: x.shortDescription,
              url: x.url,
              image: x.images[0].url
            }
          })
        );
      });
  };

  const popStates = () => {
    return (
      <>
      <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a State"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      onChange={onChangeState}
    >
      {statesList.map((x) => (
        <Option key={x} value={x}>
          {x}
        </Option>
      ))}
    </Select>
    </>
    )
  }

  const popParks = () => {
    return (
      <>
        <h3>Select a Park</h3>
        <Select
          showSearch
          style={{ width: 300 }}
          placeholder="Select a Park"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          onChange={onChangePark}
        >
          {parksList.map((x) => (
            <Option key={x.parkCode} value={x.parkCode}>
              {x.fullName}
            </Option>
          ))}
        </Select>
      </>
    );
  };

  const popActivities = () => {
    return (
      <>
        <h3>Select an Activity</h3>
        <Select
          mode= "multiple"
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
            <Option key={x.name} value={x.name}>
              {x.name}
            </Option>
          ))}
        </Select>
      </>
    );
  };
  function success() {
    Modal.success({
      content: parkName + ' has been created as a new trip!',
    });
  }

  const createTrip = () => { 
    // if(props.token && data.length < 6){
      const data = {
        name: parkName,
        activities: selectedActivities,
        public: pub
      };
  
      fetch("http://localhost:3000/trip/create", {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI2Nzg1MzE0LCJleHAiOjE2MjY4NzE3MTR9.BHVccVtf-xSKiKuUIAr5uPAZfBvi9f7C-dub0w07u1E`,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
     
    // } else {
    //   history.push("/login");
    // }


    // return(
      
    //  ) 

  };

  function onChange(checked){
    console.log(`switch to ${checked} ${pub}`)
    setPub(!checked)
  }

  const showCreateButton = () => {
    return (
      <> 
      <Switch defaultChecked onChange={onChange} />
      <Divider />        
      {/* <Form 
        labelCol={{
          span:12,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >  */}
      {/* <Form.Item label="Trip Name">
        <span className="ant-form-text">{parkName}</span>
      </Form.Item>
      <Form.Item label="Selected Activities">
        <span className="ant-form-text">{selectedActivities + "  "}</span>
      </Form.Item>
      <Form.Item name="public" label="Public" valuePropName="checked" value={pub} >
        
      </Form.Item>
      <Form.Item > */}
        <Button type="primary" onClick={() => createTrip(), (success)}>Create Trip</Button>
        
          {/* </ Form.Item>
      </Form>
        */}
      </>
    );
  };

  return (
    <div>
      <div>
        <TripsDisplay /> 
        <h3>Select a State</h3>
      </div>
      <div>{popStates()}</div>
      <br />
      <div>{parksList.length > 0 ? popParks() : <></>}</div>
      <div>{activitiesList.length > 0 ? popActivities() : <></>}</div>
      <div>{selectedActivities.length > 0 ? showCreateButton() : <></>}</div>
     
    </div>
  );
};

export default TripsIndex;
