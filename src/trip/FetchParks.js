import React, { useState } from 'react'
import { Menu, Dropdown, message } from 'antd';

function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }
  
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  

const ParkByState = () => {
    const [park, setPark] = useState('')
    const [activity, setActivity] = useState('')
    const [stateCode, setStateCode] = useState('')
    const statesList = ['AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY']
    const [parksList, setParksList] = useState([])
    const [chosenPark, setChosenPark] = useState('')
    const [activitiesList, setActivitiesList] = useState([])
    const fetchPark = ({key}) =>{
        // const stateCodes = []
        console.log(key);
        // const statecode;
        fetch (`https://developer.nps.gov/api/v1/parks?stateCode=${key}&api_key=juZPWoiLqGQacPwyNwSLvePhqziqUeEAyhmebarc`)
        //fetch (`https://developer.nps.gov/api/v1/parks?stateCode=&api_key=juZPWoiLqGQacPwyNwSLvePhqziqUeEAyhmebarc`)
        .then(async res => {
            // const stateCodes = ['IN', 'OH', 'MI', 'DC']
            
            try {
                const json = await res.json()
                const data = json.data
                console.log(data.map(park => park))
                console.log(data.map(park => park.activities.map(activity => activity.name)))
                setParksList(data.map(park => park))
            } catch (err) {
                return err
            }
        })
    }
    
    const fetchActivities = ({key}) => {
        console.log(key);
        fetch (`https://developer.nps.gov/api/v1/parks?parkCode=${key}&api_key=juZPWoiLqGQacPwyNwSLvePhqziqUeEAyhmebarc`) 
        .then(async res => {
            try{
                const json = await res.json()
                console.log(json);
                const data = json.data
                setActivitiesList(data.map(park =>park.activities.map(activity => activity.name)))
                // setActivitiesList(data.map(park =>park.activities.map((activity, index) => activity.name[index]))) -When I try this it gives back some encrypted info in the activities drop down
                console.log(activitiesList);
            } catch (err) {
                return err
            }
        })   
    }

  const menu =( <Menu value={stateCode} onClick={fetchPark} >
      {/* Now that I'm using Ant Design setStateCode is not being used */}
     {statesList.map((code)  => {return <Menu.Item key={code}>{code}</Menu.Item>})}
      
    </Menu>)

    const menu2 = (<Menu value={park} onClick={fetchActivities} >
        {parksList.map((p)  => { return <Menu.Item key={p.parkCode}>{p.fullName}</Menu.Item>})}
         {/* On click we want to fetchActivities and change park code instead of FetchPark the action that needs to performed is one that  when you hover the menu down it should have an option, maybe a checkbox, to to add park to trip and when you click on the park in the menu it should display park info in a div below. Then onSubmit anything that is checked gets added to trip. Probably requires another fetch separate from the FetchPark */}
         {/* whatever park they select it needs to get assigned to the name property in CreateTrips */}
        
       </Menu>)

       const menu3 = (<Menu value={activity} >
           {/* The logic also needs to say you can't choose an activity without choosing a park first, but the activity cannot be called upon until we have the park want. Probably requires another fetch */}
        {activitiesList.map((a)  => { return <Menu.Item key={a}>{a}</Menu.Item>})}
         
       </Menu>)
       
        // 
    return (
        <> 
    <Dropdown overlay={menu}>
    <a className="ant-dropdown-link">
     Choose a State 
     
    </a>
  </Dropdown>
  <br />
  <Dropdown overlay={menu2}>
    <a className="ant-dropdown-link">
      Choose a Park
      {/* Maybe you need another fetch for parks */}
    </a>
  </Dropdown>
  <br />
  <Dropdown overlay={menu3}>
    <a className="ant-dropdown-link" >
      Choose an Activity 
    </a>
  </Dropdown>
        
  {/* <CreateTrip FetchParks={FetchParks} parks={park}/> */}

  {/* We need buttons here that will add parks and activities to the trips */}






  
        {/* <select value={stateCode} onChange={(e) => setStateCode(e.currentTarget.value)}>
            {statesList.map((code, index) => {
                return <option key={index} value={code}>{code}</option>
            })}
        </select> */}
        {/* <button onClick={fetchPark}>Button</button>
        <select value={park} onChange={(e) => setPark(e.currentTarget.value)}>
            {parksList.map((p, index)=> {
                return <option key={index} value={p}>{p}</option>
            })}
        </select> */}
        {/* <select value={activity} onChange={(e) => setActivity(e.currentTarget.value)}>
            {activitiesList.map((a, index)=> {
                return <option key={index} value={a}>{a}</option>
            })}
        </select> */}
        </>
    )
}

export default ParkByState
