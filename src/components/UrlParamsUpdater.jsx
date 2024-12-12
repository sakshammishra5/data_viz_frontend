import { useParams, useNavigate } from "react-router-dom"
import React, { useContext, useEffect } from 'react'
import { AppContext } from "../context/AppContext"

const UrlParamsUpdater = () => {
    const {age,gender}=useContext(AppContext)
    const params = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        const updatedParams = { ...params }
        updatedParams['age'] = age
        updatedParams['gender'] = gender

        navigate({
            pathname:window.location.pathname,
            search:`?${new URLSearchParams(updatedParams).toString()}`
        })

    }, [age, gender])

    return null;
}

export default UrlParamsUpdater
