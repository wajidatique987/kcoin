import "./Login.css";
import logo from "./assets/images/logo.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="logo">
          <img src={logo} alt="" />
        </h1>
        <h2>Sign up</h2>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="signup-link">
            Login
          </Link>
        </p>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your Email" />
          <label>Password</label>
          <input type="password" placeholder="Set your Password" />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <div className="Register-btn">
            <Link to="/update">
              <button type="submit" className="sign-btn">
                Register
              </button>
            </Link>
          </div>
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

export default Signup;
