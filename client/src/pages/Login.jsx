import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import {toast} from 'react-hot-toast'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login, isLoading, error} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(username, password)
        toast.success('Login Succesful')
        
    }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
        <div>
            <h1>Login</h1>
        </div>

        <div>
            <label>Username: </label>
            <input 
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
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
