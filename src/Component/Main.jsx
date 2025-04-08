// Librarys
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import'../css/Main.css'// Archivo CSS para los estilos

// Main component 
export const Main = () => {
    // Vars 
    const { isAuthenticated, user } = useAuth0();

    return (
        <div className="main-container">
            {isAuthenticated && (
                <div className="user-card">
                    <div className="user-avatar-container">
                    <img 
                        src={require('../imagenes/imagen.jpg')} 
                        alt={user.name} 
                        className="user-avatar"
                    />
                    </div>
                    <div className="user-info">
                        <h3 className="user-greeting">¡Hola, {user.name}!</h3>
                    </div>
                </div>
            )}
        </div>
    );
};