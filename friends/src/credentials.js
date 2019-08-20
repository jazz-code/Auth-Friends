import React from 'react'

import axios from "axios"




const Credentals = () => {
    var credentials = {
        email: 'Lambda@labd.com',
        password: 'i<3Lambd4'
    }
    
    axios.post("https://mock-users-server.herokuapp.com/api/auth", credentials).then(console.log)
    .catch(err => console.log(err.response.data))
    

    return (
        <>
    <h1>Test</h1>

        </>
    )
}

export default Credentals