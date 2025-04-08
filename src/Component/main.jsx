// Librarys
import React from 'react'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"

// Main component 
export const Main = () => {
    // Vars 
    const { user, isAuthenticated } = useAuth0()

    return (
        <span>
            <p>Greeting Hola {
            isAuthenticated?user.name:
            "Usuario"
            }</p>
        </span>
    )
}

// export default withAuthenticationRequired(Main, {
//     onRedirecting: () => <p>Loading...</p>
// })