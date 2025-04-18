// Librarys 
import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

// Main component 
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return <button className="btn" onClick={() => loginWithRedirect()}>Log In</button>
}