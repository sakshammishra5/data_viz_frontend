import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = () => {
  const { age, gender, dateRange, chartData, setChartData, setLoading } = useContext(AppContext)

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        let sendData = { age, gender, dateRange }
        let response = await fetch(import.meta.env.VITE_BASE_URL+'/getchartdata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendData)
        })

        let data = await response.json()
        setChartData(data.result)
        setLoading(false)
      }
      catch (error) {
        console.log(error)
        setLoading(false)
      }
      finally {
        setLoading(false)
      }
    }
    fetchChartData()
  }, [age, gender, dateRange])

  return (
    chartData == null ? "Loading" : <ResponsiveContainer width={"100%"} height={300}>
      <BarChart
        layout='vertical'
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type='number'  />
        <YAxis dataKey='name' type="category" />
        <Tooltip />
        <Bar
          dataKey="value"
          fill="#4472C4"
          activeBar={<Rectangle fill="#C55A11" stroke="#4472C4" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent
