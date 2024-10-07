import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
        <div className="nav">
          <Link to={'/'}> 
            <h1>Social Media App</h1>
          </Link>
          
          <div className="nav-links">
            <Link className="nav-link-container" to={'/login'}>
              <p className="login-link">Login</p>
            </Link>
            <Link className="nav-link-container" to={'/signup'}>
              <p className="signup-link">Signup</p>
            </Link>
          </div>
        </div>
    </header>
  )
}
