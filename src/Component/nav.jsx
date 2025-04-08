// Librarys
import { render } from '@testing-library/react'
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

// Imports 
import { LoginButton } from './Login'
import { LogoutButton } from './Logout'

export const Nav = () => {
    const { isAuthenticated } = useAuth0()

    return (
        <nav>
            <span>
                <a href="/main">Main</a>
            </span>
            <span>
                {
                    isAuthenticated? <LogoutButton />
                    :<LoginButton />
                }
            </span>
        </nav>
    )
}