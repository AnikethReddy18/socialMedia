import { useState } from "react";
import apiClient from "../apiClient.js"
import { useAuth } from "../AuthProvider.jsx"
import { useNavigate } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const navigate = useNavigate()
    const auth = useAuth()

    async function submitSignupForm(e) {
        e.preventDefault()

        try {
            const response = await apiClient.post("/signup", { firstName, lastName, username, password },
                {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })

            const { data } = await apiClient.post("/login", { username, password },
                {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
            auth.setToken(data.token)    
            navigate("/")
        } catch (err) {
            console.log(err)
            setError(err.response.data.errors)
        }


    }

    return (
        <form>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={submitSignupForm}>Signup</button>
            {error && error.map((e, i) => <p key={i} style={{ color: 'red' }}>{e.msg || e}</p>)}
        </form>
    );
}

export default Signup;