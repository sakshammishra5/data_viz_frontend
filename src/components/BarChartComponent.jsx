import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = () => {
  const { age, gender, dateRange, chartData, setChartData, setloading } = useContext(AppContext)

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        let sendData = { age, gender, dateRange }
        let response = await fetch('https://chart-52w8.onrender.com/getchartdata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sendData)
        })

        let data = await response.json()
        setChartData(data.result)
        setloading(false)
      }
      catch (error) {
        console.log(error)
        setloading(false)
      }
      finally {
        setloading(false)
      }
    }
    fetchChartData()
  }, [age, gender, dateRange])


  return (
    chartData == null ? "Loading" : <ResponsiveContainer width={"100%"} height={300}>
      <BarChart
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Day" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="A"
          fill="#B3CDAD"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="B"
          fill="#B3CDAD"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="C"
          fill="#FF5F5E"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
        <Bar
          dataKey="D"
          fill="orange"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartComponent
