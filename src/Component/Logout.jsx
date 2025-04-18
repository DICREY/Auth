// Librarys 
import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

// Main component 
export const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button className="btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  )
}