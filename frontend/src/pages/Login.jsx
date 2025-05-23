import { useState } from "react";
import apiClient from "../apiClient.js"
import { useAuth } from "../AuthProvider.jsx"
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const navigate = useNavigate()
    const auth = useAuth()

    async function submitLoginForm(e) {
        e.preventDefault()

        try {
            const { data } = await apiClient.post("/login", { username, password },
                {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
            
            auth.setToken(data.token)    
            navigate("/")
        } catch (err) {
            console.log(err)
            setError(err.response.data.error)
        }


    }

    return (
        <form>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={submitLoginForm}>Login</button>
            {error}
        </form>
    );
}

export default Login;