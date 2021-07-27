import React, { useState, useEffect } from "react";
import { Select, Button, Divider, Modal } from "antd";
import { useHistory } from "react-router-dom";
import APIURL from "../../Utils/Environment";

const TripsIndex = (props) => {
  const history = useHistory();
  const [stateId, setStateId] = useState("");
  const [parkCode, setParkCode] = useState("");
  const [parkImage, setParkImage] = useState("")
  const [parkName, setParkName] = useState("");
  const [tripId, setTripId] = useState("");
  const [activityStatus, setActivityStatus] = useState(0);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [activitiesList, setActivitiesList] = useState([]);
  const [parksList, setParksList] = useState([]);
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
    if (stateId !== "" && activityStatus === 0) {
      getParks();
    }
    if (parkCode !== "" && activityStatus === 0) {
      getActivities();
    }
    if (tripId !== "" && activityStatus === 0) {
      createActivities();
    }
  }, [stateId, parkCode, tripId, activityStatus]);

  const onChangeState = (value) => {
    setParkCode("");
    setParkName("");
    setTripId("");
    setActivityStatus(0);
    setStateId(value);
    setSelectedActivities([]);
  };

  const onChangePark = (value) => {
    setParkCode(value);
  };

  const onChangeActivity = (value) => {
    setSelectedActivities(value);
  };

  const getParks = (e) => {
    fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateId}&api_key=juZPWoiLqGQacPwyNwSLvePhqziqUeEAyhmebarc`)
      .then((response) => response.json())
      .then((data) => {
        if(data.data.length > 0) {
          setParkImage(data.data[0].images[0].url)
        setParksList(
          data.data.map((x) => {
            return {
              fullName: x.fullName,
              parkCode: x.parkCode,
              image: x.parkImage
            };
          })
        );
        }else{
          setParksList([]);
          setActivitiesList([]);
          setSelectedActivities([]);
        }
      });
  };

  const getActivities = (e) => {
    fetch(`https://developer.nps.gov/api/v1/thingstodo?parkCode=${parkCode}&api_key=juZPWoiLqGQacPwyNwSLvePhqziqUeEAyhmebarc`)
      .then((response) => response.json())
      .then((data) => {
        setActivitiesList([]);
        setSelectedActivities([]);
        if (data.data.length > 0) {
          setParkName(data.data[0].relatedParks[0].fullName);
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
        }
      }).catch(err => {
        console.error(err)
      });
  };

  const popStates = () => {
    return (
      <div>
        <Select
          className="stateSelector"
          showSearch
          style={{ width: 300 }}
          value={stateId ? stateId : "Select a State"}
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
      </div>
    );
  };

  const popParks = () => {

    return (
      parksList.length > 0 && stateId !== "" ? 
      <>
        <Select
          showSearch
          value={parkName ? parkName : "Select a Park"}
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
      :
      stateId === "" ? 
      <></>
      :
      <>No Parks Available</>
    )
  };

  const popActivities = () => {
    return (
      <>
        <Select
          mode="multiple"
          value={selectedActivities}
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

  const createTrip = () => {
    setActivityStatus(0);
    if (props.token) {
      const data = {
        name: parkName,
        parkCode: parkCode,
        image: parkImage
      };

      fetch(`${APIURL}/trip/create`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.token}`,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setTripId(data.data.id);
        })
        .then(
          Modal.success({
            content: parkName + " has been created as a new trip!",
          })
        );
    } else {
      history.push("/portal", { from: "/trips" });
    }
  };

  const createActivities = (e) => {
    const actData = [];
    activitiesList.map((x) => {
      return selectedActivities.forEach((item, index, array) => {
        if (item === x.title) {
          actData.push({
            name: x.name,
            tripId: tripId,
            description: x.shortDescription,
            location: x.location,
            title: x.title,
            url: x.url,
            image: x.image,
          });
        }
      });
    });

    fetch(`${APIURL}/activity/create/${tripId}`, {
      method: "POST",
      body: JSON.stringify(actData),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      }),
    }).then((response) => setActivityStatus(response.status))
    .then(() => history.push("/viewTrips"))
  };

  const showCreateButton = () => {
    return (
      <>
        <Divider />
        <Button type="primary" onClick={() => createTrip()}>
          Create Trip
        </Button>
      </>
    );
  };

  return (
    <div className="tripDiv">
      <div>
        <h3>Plan Your Trip</h3>
      </div>
      <div>{popStates()}</div>
      <br />
      <div>{popParks()}</div>
      <br />
      <div>{activitiesList.length > 0 ? popActivities() : <>No Activities Available</>}</div>
      <div>{selectedActivities.length > 0 ? showCreateButton() : <></>}</div>
    </div>
  );
};

export default TripsIndex;
