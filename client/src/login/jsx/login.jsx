import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

// CSS
import "../css/login.css";
// Logo
import logo from "../../assets/logo-removebg-preview (1) copy.ico"; 
// SweetAlert2
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Frontend validation
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email and Password are required!",
      });
      return;
    }

    // Set loading state to true before making the request
    setLoading(true);

    try {
      // Sign in with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in:", userCredential.user);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successful!",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/dashboard"); 
    } catch (error) {
      console.error("Login error:", error.message);

      // Show different alerts based on error codes
      switch (error.code) {
        case "auth/user-not-found":
          Swal.fire({
            icon: "error",
            title: "User not found",
            text: "Please check your email.",
          });
          break;
        case "auth/wrong-password":
          Swal.fire({
            icon: "error",
            title: "Incorrect Password",
            text: "Please try again.",
          });
          break;
        case "auth/invalid-email":
          Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "Please enter a valid email format.",
          });
          break;
        default:
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "An error occurred during login. Please try again.",
          });
      }
    } finally {
      // Set loading state back to false after the process completes (success or error)
      setLoading(false);
    }
  };

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  // Navigate to sign-up page
  const navigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-login">
          <img src={logo} alt="Logo" />
        </div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Checking...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
