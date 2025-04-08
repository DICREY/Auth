import React from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { App } from './App'

const root = createRoot(document.getElementById('root'))

root.render(
<Auth0Provider
    domain="dev-w615bude3b5w3rej.us.auth0.com"
    clientId="n8RqZ87I7nDqLpi304SoTUdg9KBh8UhS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }} >
    <App />
  </Auth0Provider>,
)