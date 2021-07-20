import React, {useState, useEffect} from 'react'

const DeleteTrips = () => {

    fetch(`http://localhost:3000/trip/delete`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer `
        })
    })
}