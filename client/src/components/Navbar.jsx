import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from '../hooks/useLogout'

export default function Navbar() {
  const { user } = useAuthContext()
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }


  return (
    <header>
        <div className="nav">
          <Link to={'/'}> 
            <h1>Social Media App</h1>
          </Link>
          
          <div className="nav-links">
            {user && (
              <div>
                <span>Hello {user.username}</span>
                <button onClick={handleClick}>Logout</button>
            </div>
            )}
            {!user && (
              <div>
                <Link className="nav-link-container" to={'/login'}>
                  <p className="login-link">Login</p>
                </Link>
                <Link className="nav-link-container" to={'/signup'}>
                  <p className="signup-link">Signup</p>
                </Link>
              </div>
            )}
          </div>
        </div>
    </header>
  )
}
