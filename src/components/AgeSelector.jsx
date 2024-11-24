import React, { useContext, useEffect, useState } from 'react';
import { AppContext} from '../context/AppContext';
const AgeSelector = () => {
     const { age, setAge,chartData,setChartData } = useContext(AppContext)

    const onChange = (e) => {
        setAge(e.target.value)
    }

    useEffect(()=>{
        if(chartData!==null)
        setChartData(prev=>{
            prev.filter((item)=>item.Age==age)
        })
    },[age])

    return (
        <select
            value={age}
            onChange={(e) => onChange(e)}
            className="w-[180px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option value="15-25">15-25</option>
            <option value=">25">{">25"}</option>
        </select>
    );
};

export default AgeSelector;