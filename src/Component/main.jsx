// Librarys
import React from 'react'
import { useAuth0} from "@auth0/auth0-react"

// Main component 
export const Main = () => {
    // Vars 
    const { isAuthenticated, user } = useAuth0()

    return (
        <span>
            <p>Greeting...</p>
            {
                <p>Hola {isAuthenticated?user.name:"Usuario"}</p>
                
            }
        </span>
    )
}