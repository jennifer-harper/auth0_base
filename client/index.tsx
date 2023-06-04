import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    /**
     * Auth0Provider is a component that has a hook that provides
     * all authentication operations
     *
     * TODO: replace the empty strings below with your own domain, clientId, and audience
     */
    <Auth0Provider
      domain="kahu-jennifer.au.auth0.com"
      clientId="wSXyLTeM8M5tPaa3aXOL5GHzZqA8E3je"
      redirectUri={window.location.origin}
      audience="https://image-pad/api"
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  )
})
