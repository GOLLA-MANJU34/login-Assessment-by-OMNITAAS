import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMesg, setError] = useState("");

  const [isHide, setHide] = useState(true);

  const typeValue = isHide ? "password" : "text";

  useEffect(() => {
    const savedUser = localStorage.getItem("username");

    if (savedUser) {
      setUsername(savedUser);
    }
  }, []);

  const onUsername = (value) => {
    setUsername(value);
  };

  const onPassword = (value) => {
    setPassword(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const userDetails = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        "https://login-assessment-by-omnitaas.onrender.com/login",
        userDetails
      );

      localStorage.setItem("username", response.data.username);

      navigate("/welcome");
    } catch (error) {
      setError(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={onSubmit}>
        <h2>Login</h2>

        <input
          type="text"
          value={username}
          placeholder="Enter Username"
          onChange={(e) => onUsername(e.target.value)}
        />

        <div className="password-card">
          <input
            type={typeValue}
            value={password}
            placeholder="Enter Password"
            onChange={(e) => onPassword(e.target.value)}
          />
          {isHide ? (
            <FaEye
              onClick={() => setHide((prev) => !prev)}
              className="eye-icon"
            />
          ) : (
            <FaEyeSlash
              onClick={() => setHide((prev) => !prev)}
              className="eye-icon"
            />
          )}
        </div>
        <button type="submit">Login</button>

        {errorMesg && <p className="error">{errorMesg}</p>}
      </form>
    </div>
  );
}

export default Login;
