// Librarys 
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'

// Imports 
import './css/index.css'
import { App } from './Moduls/App'

const root = createRoot(document.getElementById('root'))

root.render(
<Auth0Provider
    domain="dev-w615bude3b5w3rej.us.auth0.com" 
    clientId="n8RqZ87I7nDqLpi304SoTUdg9KBh8UhS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    cacheLocation="localstorage"
    useRefreshTokens={true} >
    <App />
  </Auth0Provider>,
)