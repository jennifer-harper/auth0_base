import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { NavGroup, NavButton } from './Styled'
import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
 
  // TODO: call the useAuth0 hook and destructure user, logout, and loginWithRedirect
  // TODO: replace placeholder user object with the one from auth0 - With this change, the user object used in the Nav component is now retrieved from the useAuth0 hook, allowing the component to display the correct user information when the user is authenticated


  const {user, logout, loginWithRedirect } = useAuth0()
  console.log(user);
  
// const user = {
//   nickname: 'john.doe',
// }
  const handleSignOut = () => {
    // console.log('sign out')
    logout()
  }

  const handleSignIn = () => {
    //console.log('sign in')
    loginWithRedirect()
  }

  return (
    <>
      <NavGroup>
        <IfAuthenticated>
          <NavButton onClick={handleSignOut}>Sign out</NavButton>
          {user && <p>Signed in as: {user?.nickname}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavButton onClick={handleSignIn}>Sign in</NavButton>
        </IfNotAuthenticated>
      </NavGroup>
      <h1>Fruit FTW!</h1>
    </>
  )
}

export default Nav
