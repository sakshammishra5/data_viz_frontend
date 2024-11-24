import React, { useContext, useEffect, useState } from 'react';
import { AppContext} from '../context/AppContext';

const GenderSelector = () => {
    const {gender,setGender ,chartData,setChartData}=useContext(AppContext)
    const onChange = (e) => {
        setGender(e.target.value)
    }

    useEffect(()=>{
        if(chartData!==null)
        setChartData(prev=>{
            prev.filter((item)=>item.Gender==gender)
        })
    },[gender])


    return (
        <select
            value={gender}
            onChange={(e) => onChange(e)}
            className="w-[180px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
    );
};

export default GenderSelector;