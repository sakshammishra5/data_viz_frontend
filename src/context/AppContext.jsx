import { createContext, useState } from "react";


export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [age, setAge] = useState("15-25");
  const [gender, setGender] = useState("Male")
  const [dateRange, setDateRange] = useState([new Date('08/01/2022'), new Date('08/11/2022')]);
  const [chartData,setChartData]=useState(null)
  const [loading,setLoading]=useState(true)

  const stateObj={
    isAuth,
    setIsAuth,
    age,
    gender,
    setAge,
    setGender,
    dateRange,
    setDateRange,
    chartData,
    setChartData,
    loading,
    setLoading
  }

  return (
    <AppContext.Provider value={stateObj}>
      {children}
    </AppContext.Provider>
  );
};




