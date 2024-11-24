import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

function SignupPage() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
  });


  const onChangeHandler = (e) => {
    setSignupData({ ...signupData, [e.target.id]: e.target.value });
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (signupData.username && signupData.password) {
      let data = await registerUser(signupData);
      if (data.status === 201) {
        navigate("/login");
      }
    }
  }
  return (
    <div className="flex h-dvh justify-center items-center">
      <form className="flex w-full   max-w-md flex-col gap-4" onSubmit={(e) => onSubmitHandler(e)}>
        <h1 className="text-center text-2xl">Signup Page</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Your username" />
          </div>
          <TextInput id="username" type="username" placeholder="username" required value={signupData.username} onChange={(e) => onChangeHandler(e)} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" type="password" required value={signupData.password} onChange={(e) => onChangeHandler(e)} />
        </div>
        <div className="flex gap-2">
          <span>If exesting user please </span><button className="bg-slate-600 text-cyan-50 px-2 py-1 rounded-sm " onClick={() => navigate("/")}>Login</button>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}


export default SignupPage;