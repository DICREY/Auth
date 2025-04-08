// Librarys
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'

// Imports
import { Main } from '../Component/main'
import { Nav } from '../Component/nav'
import '../css/App.css'

// Main component 
export const App = () => {
  // Vars
  const { isLoading, error } = useAuth0()

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
        <Route path="/main" element={<Main />} />
        <Route path="*" component={<p>Not Found</p>} />
      </Routes>
    </BrowserRouter>
  )
}