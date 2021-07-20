import React, {useState, useEffect} from 'react'

const DeleteTrips = (props) => {

    fetch(`http://localhost:3000/trip/`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI2Nzg1MzE0LCJleHAiOjE2MjY4NzE3MTR9.BHVccVtf-xSKiKuUIAr5uPAZfBvi9f7C-dub0w07u1E`
        })
    }) .then (() => props.fetchTrips())
        .catch (err => console.log(err))
        
}

export default DeleteTrips