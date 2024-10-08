import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

export default function Signup() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, isLoading, error } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(name, username, email, password)
    }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
        <div>
            <h1>Signup</h1>
        </div>

        <div>
            <label>Name: </label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
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
        <button disabled= {isLoading}>Sign Up</button>
        {error ?? <div className='error'>{error}</div>}
    </form>
  )
}
