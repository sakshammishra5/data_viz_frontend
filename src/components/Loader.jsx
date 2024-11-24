import { RotatingLines } from "react-loader-spinner";
import React from 'react'


const Loader = () => {
  return (
    <div className="flex h-dvh justify-center items-center">
<RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
  )
}

export default Loader
