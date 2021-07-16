const handleOk = () => {
    console.log('In handleOk -- DO SOMETHING WITH DATA THE USER ENTERED')
    console.log(notes)

    fetch(`http://localhost:3001/activity/${id}`, {
        method: 'PUT',
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${props.token}`
            }),
            body: JSON.stringify({notes: notes})
        })
        .then(res => res.json())
        .then(activityData => {
            console.log(activityData)
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
