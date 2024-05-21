import React from "react";
import { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const TogglePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return [showPassword, handlePassword];
};

function FormRegister() {
  const [showPassword, handlePassword] = TogglePassword();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");

  const [isPressed, setIsPressed] = useState(false)

  const validateEmail = (email) => {
    const symbol = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return symbol.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPressed(true)
    if (password1 !== password2) {
      setMessage("password doesn't match");
      setIsPressed(false)
      return;
    }
    setMessage("");
    if (email == "" || password1 == "" || password2 == "" || username == "") {
      setMessage("fill all the fields");
      setIsPressed(false)
      return;
    }
    if (!validateEmail(email)) {
      setMessage("enter a valid email format");
      setIsPressed(false)
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/registration",
        {
          email: email,
          username: username,
          password: password1,
        }
      );
      // const { message } = data;
      localStorage.setItem("accessToken", data.accessToken);
      console.log({ data });
    } catch (error) {
      console.log(error);
    } finally{
      setIsPressed(false)
    }
  };

  return (
    <div className="all grid justify-items-center items-center ">
      <div className="form text-2xs w-3/5 mt-4 ">
        <div className="mb-4">
          <h1 className="font-bold text-xl ">Get started with TaskDock</h1>
          <h1 className="mb-4">Explore the features free</h1>
        </div>
        <div className="create_username mb-4">
          <input
            type="text"
            placeholder="create a username"
            className="border-2 border-gray-300 rounded-lg w-full h-10 p-1 "
            value={username}
            onChange={(v) => {
              setUsername(v.target.value);
            }}
          />
        </div>
        <div className="email_input mb-4">
          <input
            type="text"
            placeholder="enter your email"
            className="border-2 border-gray-300 rounded-lg w-full h-10 p-1"
            value={email}
            onChange={(v) => {
              console.log(v);
              setEmail(v.target.value);
            }}
          />
        </div>
        <div className="password_input mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="set your password"
            className="border-2 border-gray-300 rounded-lg w-full h-10 p-1 "
            id="password1"
            value={password1}
            onChange={(e) => {
              setPassword1(e.target.value);
            }}
          />
        </div>
        <div className="password_input mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="confirm your password"
            className="border-2 border-gray-300 rounded-lg w-full h-10 p-1 "
            id="password2"
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
        </div>
        <span>{message}</span>
        <div className="checkboxes flex mt-4 gap-1 items-center ">
          <input
            type="checkbox"
            className=""
            onClick={handlePassword}
            id="checkboxx"
          />
          <div className="justify-between flex-grow">
            <label htmlFor="checkboxx">Show password</label>
          </div>
          <Link to="/" className="text-gray-600 hover:underline">
            Forgot password?
          </Link>
        </div>

        <div className="button w-full mt-4 border-2 border-transparent rounded-lg bg-black h-10 flex items-center justify-center hover:bg-gray-600 active:bg-gray-500 focus:outline-none cursor-pointer ease-in duration-150">
          <div
            className="text-white flex gap-2 items-center"
            onClick={handleSubmit}
          >
            Submit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
        <div className="mt-5 mb-1 flex justify-center">
          <p>
            Already have an account?{"  "}
            <Link to="/" className="text-blue-600 hover:underline">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

function FormLogin() {
  const [showPassword, handlePassword] = TogglePassword();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email == "" || password == "") {
      setMessage("fill all the fields");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: email,
          password: password,
        }
      );
      // const { message } = data;
      useEffect(() => {
        localStorage.setItems("accessToken", data.accessToken);
        console.log({ data });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="all grid justify-items-center items-center">
      <div className="form text-2xs w-3/5 mt-4 ">
        <div className="mb-6">
          <h1 className="font-bold text-xl ">Get started with TaskDock</h1>
          <h1 className="mb-4">Explore the features free</h1>
        </div>
        <div className="email_input mb-4">
          <input
            type="email"
            placeholder="enter your email"
            className="border-2 border-gray-300 rounded-lg w-full h-10 p-1"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="password_input mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="enter your password"
            className="border-2 border-gray-300 rounded-lg w-full h-10 p-1 "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <span>{message}</span>
        <div className="checkboxes flex mt-4 gap-1 items-center ">
          <input
            type="checkbox"
            className=""
            onClick={handlePassword}
            id="checkboxx"
          />
          <div className="justify-between flex-grow">
            <label htmlFor="checkboxx">Show password</label>
          </div>
          <a href="" className="text-gray-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <div className="button w-full mt-4 border-2 border-transparent rounded-lg bg-black h-10 flex items-center justify-center hover:bg-gray-600 active:bg-gray-500 focus:outline-none cursor-pointer ease-in duration-150">
          <div
            className="text-white flex gap-2 items-center"
            onClick={handleSubmit}
          >
            Submit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
        <div className="mt-5 mb-1 flex justify-center">
          <p>
            Don't have an account?{"  "}
            <Link to="/registration" className="text-blue-600 hover:underline">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export { FormLogin, FormRegister, TogglePassword };
