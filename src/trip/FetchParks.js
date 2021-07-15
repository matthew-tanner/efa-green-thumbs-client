import React, { useState } from 'react'
import { Menu, Dropdown, Checkbox, Button } from 'antd';
import CreateTrips from './CreateTrips';


  

const ParkByState = () => {
    const [park, setPark] = useState([])
    const [activity, setActivity] = useState('')
    const [stateCode, setStateCode] = useState('')   
    const [parksList, setParksList] = useState([])
    const [chosenPark, setChosenPark] = useState('')
    const [parkDescription, setParkDescription] = useState('')
    const [chosenActivity, setChosenActivity] = useState([])
    const [activitiesList, setActivitiesList] = useState([])
    const statesList = ['AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY']
    const fetchParks = ({key}) =>{
        // const stateCodes = []
        // console.log(key);
        // const statecode;
        fetch (`https://developer.nps.gov/api/v1/parks?stateCode=${key}&api_key=juZPWoiLqGQacPwyNwSLvePhqziqUeEAyhmebarc`)
        //fetch (`https://developer.nps.gov/api/v1/parks?stateCode=&api_key=juZPWoiLqGQacPwyNwSLvePhqziqUeEAyhmebarc`)
        .then(async res => {
            
            try {
                const json = await res.json()
                const data = json.data
                // console.log(data.map(park => park))
                // console.log(data.map(park => park.activities.map(activity => activity.name)))
                setParksList(data.map(park => park))
                
                // console.log(chosenPark)
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
                const data = json.data
                setActivitiesList(data[0].activities.map((activity => activity.name)))
                // setActivitiesList(data.map(activity => console.log(activity.name)))
                // console.log(activitiesList);
                setParkDescription(data.map(park => park.description))

                setPark(data.map(park => park.fullName))
            } catch (err) {
                return err
            
            }

        })   
    }

//Function for the checkboxes
function onChange(e) {
    console.log(`checked = setChosen${e.target.checked}`);
   e.target.checked === true && setChosenPark(e.target.checked)
   e.target.checked === true && setChosenActivity(e.target.checked)

   console.log(park);
   
   console.log(chosenPark);
   console.log(activity);
   console.log(chosenActivity);
  }

  //Function for the Submit Button
function submitFunc() {
    chosenPark === true && <CreateTrips fetchParks={fetchParks} park={park} />
    console.log(park); 
}

  const menu =( <Menu value={stateCode} onClick={fetchParks} >
      {/* Now that I'm using Ant Design setStateCode is not being used */}
     {statesList.map((code)  => {return <Menu.Item key={code}>{code}</Menu.Item>})}
      
    </Menu>)

    const menu2 = (<Menu value={park} onClick={fetchActivities} >
        {parksList.map((p)  => {return <> <Menu.Item key={p.parkCode}><Checkbox onChange={onChange} value={chosenPark} >Add to Park Trip {p.fullName}</Checkbox></Menu.Item> </> })}
        
         {/* whatever park they select it needs to get assigned to the name property in CreateTrips */}
        
       </Menu>)
        // console.log(park)
       const menu3 = (<Menu value={activity} >
        {activitiesList.map((a)  => { return <Menu.Item key={a}>{a}<Checkbox onChange={onChange} value={chosenActivity} >Add to Park Trip {a}</Checkbox></Menu.Item>})}
        
         
       </Menu>)
    
    return (
        <> 
    <Dropdown overlay={menu}>
    <a className="ant-dropdown-link">
     Choose a State     
    </a>
  </Dropdown>
  <br />
  <Dropdown overlay={menu2} >
    <a className="ant-dropdown-link">
      Choose a Park
    </a>
  </Dropdown>
  <br />
  <Dropdown overlay={menu3}>
    <a className="ant-dropdown-link" >
      Choose an Activity 
    </a>
  </Dropdown>
        <p>{parkDescription}</p>
        <br/>
        <p>{park}</p>
        <Button type="primary" htmlType="submit" onClick= {submitFunc} >
            Add Items to New Trip
          </Button>
{/* Button need to have onSubmit = e.target.checked === true && <CreateTrips park={park} /> )  */}
        
        
        {/* <CreateTrips submit={submitFunc} park={park} /> */}
        </>
        
    )
}

export default ParkByState
