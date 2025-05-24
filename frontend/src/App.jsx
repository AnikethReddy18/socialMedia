import { useAuth } from "./AuthProvider"

function App() {
  const auth = useAuth()

  function handleLogoutButton(){
    auth.setToken(null)
  }

  return (
    <>
    Hello World!
    <button onClick={handleLogoutButton}>logout</button>
    </>
  )
}

export default App

