import React from 'react'
import Calander from './Calander'
import GenderSelector from './GenderSelector'
import AgeSelector from './AgeSelector'
import BarChartComponent from './BarChartComponent'
import LineChartComponent from './LineChartComponent'
import UrlParamsUpdater from './UrlParamsUpdater'


const Dashboard = () => {
 
  return (
    <>
    <UrlParamsUpdater/>
      <div>
        <h1 className='text-center text-2xl'>DashBoard</h1>
        <div className='flex justify-center h-10 gap-4'>
          <Calander />
          <GenderSelector />
          <AgeSelector />
        </div>
        <BarChartComponent />
        <LineChartComponent />
      </div>
    </>
  )
}

export default Dashboard
