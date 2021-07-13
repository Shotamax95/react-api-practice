import axios from 'axios'
import React, { useState, useEffect } from 'react'

function DataFetching() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(res => {
            // console.log(res);
            setUsers(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    });

    return (
        <div>
            {
            users.map(user => 
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                    <p className="card-text">{user.company.catchPhrase}</p>
                </div>
                </div>)
            }
        </div>
    )
}

export default DataFetching
