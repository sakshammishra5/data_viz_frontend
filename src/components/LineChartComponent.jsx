import React, { useContext } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { AppContext } from '../context/AppContext';

const LineChartComponent = () => {
  const { chartData } = useContext(AppContext)

  return (
    <TransformWrapper
      initialScale={1}
      minScale={0.5}
      maxScale={10}
      centerOnInit={true}
      wheel={{ step: 0.1 }}
      doubleClick={{ step: 1 }}
    >
      {({ zoomIn, zoomOut, resetTransform }) => (
        <>
          {/* Zoom controls */}
          <div style={{ marginBottom: "10px", textAlign: "center" }}>
            <button onClick={zoomIn}>Zoom In</button>
            <button onClick={zoomOut}>Zoom Out</button>
            <button onClick={resetTransform}>Reset</button>
          </div>

          {/* Line chart */}
          <TransformComponent>
            <LineChart
              width={800}
              height={400}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="Day"
                tickFormatter={"Day"}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="linear" dataKey="value" stroke="#4472C4" />
            </LineChart>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  )
}

export default LineChartComponent
