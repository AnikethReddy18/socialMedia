import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from "./pages/Login.jsx"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PrivateRoute from "./PrivateRoute.jsx"
import { AuthProvider } from './AuthProvider.jsx'
import Profile from './pages/Profile.jsx'
import Signup from './pages/Signup.jsx'
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/signup",
    element: <Signup />
  },

  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path:":username",
        element: <Profile />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    < RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
