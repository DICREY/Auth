// Librarys
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Routes,Route, BrowserRouter, Navigate } from 'react-router-dom'

// Imports
import { Main } from '../Component/main'
import { Nav } from '../Component/nav'
import { UserProfile } from '../Component/User'
import '../css/App.css'

// Main component 
export const App = () => {
  // Vars
  const { isAuthenticated, isLoading, error } = useAuth0()

  // Componente para rutas de admin
  // const AdminRoute = ({ children }) => {
  //   const isAdmin = isAuthenticated && user['https://auth0.com/user_metadata']?.includes('Admin');
  //   return isAdmin ? children : <Navigate to="/" replace />;
  // };

  // Make private route
  const PrivateRoute = ({ children }) => {
    if (isLoading) {
      return <div>Loading...</div>
    }
  
    return isAuthenticated ? children : <Navigate to="/" replace />
  }

  // Verify if there is error 
  if (error) {
    return <div>Oops... {error.message}</div>
  }
  
  // Verify if is loading
  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route 
              path="/user" 
              element={<PrivateRoute>
                <UserProfile />
              </PrivateRoute>} 
            />
        {/* <Route 
              path="/admin" 
              element={<AdminRoute>
                <p>Eres Admin</p>
              </AdminRoute>} 
            /> */}
        <Route path="*" component={<p>Not Found</p>} />
      </Routes>
    </BrowserRouter>
  )
}