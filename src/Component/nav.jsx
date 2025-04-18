// Librarys 
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { FiHome }  from 'react-icons/fi'

// Imports
import '../css/nav.css'
import { LoginButton } from './Login'
import { LogoutButton } from './Logout'

// Main component 
export const Nav = () => {
    // Vars 
    const { isAuthenticated, user, isLoading, error } = useAuth0()
    console.log("Estado auth:", { isAuthenticated, user, isLoading, error });

    // Admin 
    // const isAdmin = () => {
    //     user['dev-w615bude3b5w3rej.us.auth0.com']?.includes('Admin')
        
    // }

    return (
        <nav className="navbar">
            
            <div className="nav-links">
                <a href="/" className="nav-link">
                <FiHome className="nav-icon" />
                <span>Home</span>
                </a>
                
                {isAuthenticated && (
                <>
                    <a href="/user" className="nav-link user-profile-link">
                        <img 
                            src={user?.picture} 
                            alt="Profile" 
                            className="nav-user-avatar" 
                        />
                        <span>My Profile</span>
                    </a>
                    
                </>
                )}
            </div>
            
            <div className="auth-section">
                {isAuthenticated ? (
                    <LogoutButton />
                ) : (
                    <LoginButton />
                )}
            </div>
        </nav>
    )
}