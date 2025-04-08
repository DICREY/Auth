// Librarys
import React from 'react'
import { useAuth0} from "@auth0/auth0-react"

// Main component 
export const Main = () => {
    // Vars 
    const { isAuthenticated } = useAuth0()

    return (
        <span>
            {
                isAuthenticated && (
                    <p>Greeting Hola Usuario</p>
                )
            }
        </span>
    )
}