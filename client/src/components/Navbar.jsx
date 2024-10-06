import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
        <div className="nav">
          <Link to={'/'}> 
            <h1>Social Media App</h1>
          </Link>
          
          <nav>
            <Link to={'/login'}>
              <p>Login</p>
            </Link>
          </nav>
        </div>
    </header>
  )
}
