import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assests/Loginpageimg.png";
import "../styles/Login.css";




function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const validateLogin = () => {
    if (username === "suneeta" && password === "suneeta") {
      alert("Success!");
      navigate("/");
    } else {
      alert("Incorrect login credentials!");
    }
  };

  return (
    <div className="main-content" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="login-nav-bar">
      </div>
      <div className="login-main-container">
        <div className="login-about">
          <p>
            Please Login <br />
            with your details!
          </p>
        </div>
        <div className="login-container">
          <div className="login-form">
            <form>
              <input
                value={username}
                onChange={handleChangeUsername}
                placeholder="Username"
                type="text"
              />
              <input
                value={password}
                onChange={handleChangePassword}
                placeholder="Password"
                type="password"
              />
              <button type="button" onClick={validateLogin}>
                Submit!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;

