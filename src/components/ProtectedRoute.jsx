import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Loader from "./Loader"

const ProtectedRoute = () => {
    const { isAuth, setIsAuth } = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = JSON.parse(localStorage.getItem('token'));
                if (!token) {
                    setIsLoading(false);
                    setIsAuth(false)
                    return;
                }

                let response = await fetch('https://chart-52w8.onrender.com/checkauth', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                });
                const data = await response.json()
                setIsAuth(data.isAuth)
            }
            catch (error) {
                onsole.error('Auth check failed:', error)
                setIsAuth(false)
            }
            finally {
                setIsLoading(false);
            }
        }
        checkAuth()
    }, [])

    if (isLoading) {
        return <Loader/>
    }

    return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
