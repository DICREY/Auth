import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { FiHome}  from 'react-icons/fi';

// Imports
import '../css/nav.css';
import { LoginButton } from './Login'
import { LogoutButton } from './Logout'

// Main component 
export const Nav = () => {
    // Vars 
    const { isAuthenticated, user } = useAuth0();

    return (
        <nav className="navbar">
            
            <div className="nav-links">
                <a href="/main" className="nav-link">
                <FiHome className="nav-icon" />
                <span>Inicio</span>
                </a>
                
                {isAuthenticated && (
                <>
                    <a href="/user" className="nav-link user-profile-link">
                        <img 
                            src={user?.picture} 
                            alt="Profile" 
                            className="nav-user-avatar" 
                        />
                        <span>Mi Perfil</span>
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
    );
};