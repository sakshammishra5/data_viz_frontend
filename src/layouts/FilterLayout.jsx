import React, { useEffect } from 'react'
import Calander from "../components/Calander"
import GenderSelector from "../components/GenderSelector"
import AgeSelector from "../components/AgeSelector"
import { Button } from 'flowbite-react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const FilterLayout = () => {


    const { setIsAuth, userDetails, isAuth, setUserDetails, age, gender, dateRange,setAge,setGender,setDateRange } = useContext(AppContext)
    function LogoutHandler() {
        localStorage.clear('token')
        setIsAuth(false)
    }

    useEffect(() => {
        const getUserDetails = async () => {
            const token = JSON.parse(localStorage.getItem('token'))
            let data = await fetch(import.meta.env.VITE_BASE_URL + '/checkauth', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })

            let res = await data.json()
            setUserDetails(res)
        }

        if (isAuth && userDetails == null) {
            getUserDetails()
        }
    }, [isAuth]); // Only run when auth state changes

    // useEffect(() => {
    //     const setFilter = async () => {
    //         await fetch(import.meta.env.VITE_BASE_URL + '/setfilter', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 userId: userDetails.userId,
    //                 filters: { age, gender, dateRange }
    //             }),
    //             credentials: "include",
    //         })
    //     }

    //     if (userDetails?.userId) {
    //         return ()=> {setFilter()}
    //     }
    // }, []);

    return (
        <>
            <Calander />
            <GenderSelector />
            <AgeSelector />
            <Button onClick={() => LogoutHandler()}>Logout</Button>
        </>
    )
}

export default FilterLayout
