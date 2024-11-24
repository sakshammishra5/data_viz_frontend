import { createRoot } from 'react-dom/client'
import './index.css'
import { AppContextProvider } from './context/AppContext.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';



const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <RouterProvider router={router} />
  </AppContextProvider>
)
