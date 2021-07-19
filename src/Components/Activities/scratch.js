import { formatCountdown } from "antd/lib/statistic/utils"

const handleOk = () => {
    console.log('In handleOk -- DO SOMETHING WITH DATA THE USER ENTERED')
    console.log(notes)

    fetch(`http://localhost:3001/activity/${id}`, {
        method: 'PUT',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${props.token}`
        }),
        body: JSON.stringify({ notes: notes })
    })
        .then(res => res.json())
        .then(activityData => {
            console.log(activityData)
            // Want to remove the data from the form, but don't want to update the properties.  I don't think this code is correct.
            setName('')
            setDescription('')
            setCost('')
            setNotes('')
            // Re-Display the activity cards?  Not sure if this is how to do it.  Would need to pass the function into EditActivity as a prop.
            props.TripActivities()
        })
        .catch(err => {
            console.error(err)
        })

    props.setVisible(false);
}


const handleCancel = () => {
    console.log('In handleCancel')
    // Want to remove the data from the form, but don't want to update the properties.  I don't think this code is correct.
    setName('')
    setDescription('')
    setCost('')
    setNotes('')
    // Re-Display the activity cards?  Not sure if this is how to do it.  Would need to pass the function into EditActivity as a prop.
    props.TripActivities()

    props.setVisible(false);
};

 // ToDo: delete activity from db and re-display the cards 
 const handleDelete = (id) => {
    console.log('In handleDelete -- DELETE THE ACTIVITY')
    console.log(id)
    fetch(`http://localhost:3000/log/${id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '
//ToDo: use props token
            // 'Authorization': `Bearer ${props.token}`
        })
    })
    .then 
        console.log('Deleted')
    // .then(() => props.fetchWorkouts())
}
