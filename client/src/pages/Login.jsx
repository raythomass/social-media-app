import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <form className="login-form">
        <div>
            <h1>Login</h1>
        </div>

        <div>
            <label>Email: </label>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
        </div>
        <div>
            <label>Password: </label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
        </div>
        <button>Login</button>
    </form>
  )
}
