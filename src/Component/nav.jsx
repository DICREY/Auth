// Librarys
import { render } from '@testing-library/react'
import React from 'react'

// Imports 
import { LoginButton } from './Login'
import { LogoutButton } from './Logout'

export const Nav = () => {
    render (
        <nav>
            <span>
                <a href="/main">Main</a>
            </span>
            <span>
                <LoginButton />
                <LogoutButton />
            </span>
        </nav>
    )
}