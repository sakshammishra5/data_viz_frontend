import React, { useContext } from 'react'
import Calander from './Calander'
import GenderSelector from './GenderSelector'
import AgeSelector from './AgeSelector'
import BarChartComponent from './BarChartComponent'
import LineChartComponent from './LineChartComponent'
import UrlParamsUpdater from './UrlParamsUpdater'
import { Button } from 'flowbite-react'
import { AppContext } from '../context/AppContext'
import FilterLayout from '../layouts/FilterLayout'


const Dashboard = () => {

  return (
    <>
      <UrlParamsUpdater />
      <div>
        <h1 className='text-center text-2xl'>DashBoard</h1>
        <div className='flex justify-center h-10 gap-4'>
         <FilterLayout/>
        </div>
        <BarChartComponent />
        <LineChartComponent />
      </div>
    </>
  )
}

export default Dashboard
