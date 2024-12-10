import { Button, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { AppContext } from "../context/AppContext";


function LoginPage() {
  const { setIsAuth } = useContext(AppContext)
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false)


  const onChangeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  }

  const onSubmitHandler = async (e) => {
    setLoading(true)
    e.preventDefault();
    if (loginData.username && loginData.password) {
      let data = await loginUser(loginData)
      setLoading(false)
      if (data.status === 200) {
        let resData = await data.json()
        if (resData.token) {
          setIsAuth(true)
          localStorage.setItem("token", JSON.stringify(resData.token))
          navigate("/");
        }
      }
    }
  }
  return (
    <>
      <div className="flex h-dvh justify-center items-center">
        <form className="flex w-full   max-w-md flex-col gap-4" onSubmit={(e) => onSubmitHandler(e)}>
          <h1 className="text-center text-2xl">Login Page</h1>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Your username" />
            </div>
            <TextInput id="username" type="username" placeholder="username" required value={loginData.username} onChange={(e) => onChangeHandler(e)} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" type="password" required value={loginData.password} onChange={(e) => onChangeHandler(e)} />
          </div>
          <div className="flex gap-2">
            <span>If new use please</span><button className="bg-slate-600 text-cyan-50 px-2 py-1 rounded-sm " onClick={() => navigate("/signup")}>Signup</button>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>

  );
}

export default LoginPage;
