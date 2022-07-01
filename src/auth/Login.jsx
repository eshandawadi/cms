import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =  useNavigate();

  const signHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://qa-school.krafters.dev/api/login-custom",
        {
          email: email,
          password: password,
        },
        navigate('/')
      )
      .then((response) => {
        console.log(response); 
        
        const {token}=response.data
        localStorage.setItem('token',token)
      });
  };

  return (
    <div>
      <div className="sign-in">
        <div className="Sign ">
          <div className="text">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn" onClick={signHandler}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;