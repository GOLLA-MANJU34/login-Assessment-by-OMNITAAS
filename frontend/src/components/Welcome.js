import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1>Welcome {username}</h1>

        <p>You have successfully logged in...</p>

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Welcome;
