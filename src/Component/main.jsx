// Librarys
import React from 'react'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"

// Main component 
export const Main = () => {
    // Vars 
    const { user } = useAuth0()

    return (
        <span>
            <p>Greeting Hola</p>
            {/* <p>Greeting Hola {user.name}</p> */}
        </span>
    )
}

// export default withAuthenticationRequired(Main, {
//     onRedirecting: () => <p>Loading...</p>
// })