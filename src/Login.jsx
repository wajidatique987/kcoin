import "./Login.css";
import logo from "./assets/images/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="logo">
          <img src={logo} alt="" />
        </h1>
        <h2>Login</h2>
        <p>
          Don’t have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your Email" />
          <label>Password</label>
          <input type="password" placeholder="Enter Your Password" />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-link">
              Forgot Password?
            </a>
          </div>
          <Link to="/profile">
            <button type="submit" className="login-btn">
              Log In →
            </button>
          </Link>
        </form>

        <div className="divider">or</div>

        <button className="social-btn google">
          Continue with Google
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
          />
        </button>

        <button className="social-btn apple">
          Continue with Apple
          <img
            src="https://www.svgrepo.com/show/448224/apple.svg"
            alt="Apple"
          />
        </button>
      </div>
    </div>
  );
};

export default Login;
