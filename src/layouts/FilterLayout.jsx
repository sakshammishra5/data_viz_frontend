import React, { useEffect } from 'react'
import Calander from "../components/Calander"
import GenderSelector from "../components/GenderSelector"
import AgeSelector from "../components/AgeSelector"
import { Button } from 'flowbite-react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Cookies from 'js-cookie'

const FilterLayout = () => {


    const { setIsAuth, userDetails, isAuth, setUserDetails, age, gender, dateRange,setAge,setGender,setDateRange } = useContext(AppContext)
    function LogoutHandler() {
        localStorage.clear('token')
        setIsAuth(false)
    }
// change the filter
    useEffect(() => {
        const setFilter = async () => {
            let data = await fetch(import.meta.env.VITE_BASE_URL + '/setfilter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userDetails.userId,
                    filters: { age, gender, dateRange }
                }),
                credentials: "include",
            })
        }

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

        return () => {
            setFilter()
        }
    }, [])

    useEffect(()=>{
        const filterCookie = Cookies.get("filters");
        const parsedFilter = JSON.parse(filterCookie);
        console.log(filterCookie)
        if (filterCookie) {
            try {
                setAge(parsedFilter.filter.Age)
                setGender(parsedFilter.filter.Gender)
                setDateRange([new Date(parsedFilter.filter.DateRange[0]), new Date(parsedFilter.filter.DateRange[1])])
            } catch (error) {
                console.error("Error parsing cookie:", error);
            }
        }
    },[])

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
