import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
  const {user, logout, loginWithRedirect } = useAuth0()
  console.log(user);
  
  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
  <>
  <IfAuthenticated>
    <button onClick={handleSignOut}>Sign out</button>
    {user && <p>Signed in as: {user?.nickname}</p>}
  </IfAuthenticated>
  <IfNotAuthenticated>
    <button onClick={handleSignIn}>Sign in</button>
  </IfNotAuthenticated>
  <h1>Welcome</h1>
  </>
  )
}

export default Nav
