import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, isLoading, error} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
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
        <button disabled= {isLoading}>Login</button>
        {error ?? <div className='error'>{error}</div>}
    </form>
  )
}
