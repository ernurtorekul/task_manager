import React from "react";
import { useState } from "react";
import "../components/Form.css";

function showPassword() {
  let showpassword = document.querySelectorAll(".showpassword-field");
  showpassword.forEach((field) => {
    if (field.type === "password") {
      field.type = "text";
    } else {
      field.type = "password";
    }
  });
}

function FormRegister() {
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
          />
        </div>
        <div className="email_input mb-4">
          <input
            type="text"
            placeholder="enter your email"
            className="border-2 border-gray-300 rounded-lg w-full h-10 p-1"
          />
        </div>
        <div className="password_input mb-4">
          <input
            type="password"
            placeholder="set your password"
            className="border-2 border-gray-300 rounded-lg w-full h-10 p-1 showpassword-field"
            id="show_password_id_register"
          />
        </div>
        <div className="password_input mb-4">
          <input
            type="password"
            placeholder="confirm your password"
            className="border-2 border-gray-300 rounded-lg w-full h-10 p-1 showpassword-field"
            id="show_password_id_register2"
          />
        </div>
        <div className="checkboxes flex mt-4 gap-1 items-center ">
          <input
            type="checkbox"
            className=""
            onClick={showPassword}
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
          <button className="text-white flex gap-2 items-center" type="submit">
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
          </button>
        </div>
        <div className="mt-5 mb-1 flex justify-center">
          <p>Or sign up with</p>
        </div>
        <div className="flex justify-between gap-5">
          <div className="button w-3/5 mt-4 border-2 border-transparent rounded-lg bg-black h-10 flex items-center justify-center hover:bg-gray-600 active:bg-gray-500 focus:outline-none cursor-pointer ease-in duration-150">
            <button className="text-white flex gap-2 " type="submit">
              Google
            </button>
          </div>
          <div className="button w-3/5 mt-4 border-2 border-transparent rounded-lg bg-black h-10 flex items-center justify-center hover:bg-gray-600 active:bg-gray-500 focus:outline-none cursor-pointer ease-in duration-150">
            <button className="text-white flex gap-2 " type="submit">
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormLogin() {
  return (
    <div className="all grid justify-items-center items-center">
      <div className="form text-2xs w-3/5 mt-4 ">
        <div className="mb-6">
          <h1 className="font-bold text-xl ">Get started with TaskDock</h1>
          <h1 className="mb-4">Explore the features free</h1>
        </div>
        <div className="email_input mb-4">
          <input
            type="text"
            placeholder="enter your email"
            className="border-2 border-gray-300 rounded-lg w-full h-10 p-1"
          />
        </div>
        <div className="password_input mb-4">
          <input
            type="password"
            placeholder="enter your password"
            className="border-2 border-gray-300 rounded-lg w-full h-10 p-1 showpassword-field"
            id="show_password_id_login"
          />
        </div>
        <div className="checkboxes flex mt-4 gap-1 items-center ">
          <input
            type="checkbox"
            className=""
            onClick={showPassword}
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
          <button className="text-white flex gap-2 items-center" type="submit">
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
          </button>
        </div>
        <div className="mt-5 mb-1 flex justify-center">
          <p>Or sign in with</p>
        </div>
        <div className="flex justify-between gap-5">
          <div className="button w-3/5 mt-4 border-2 border-transparent rounded-lg bg-black h-10 flex items-center justify-center hover:bg-gray-600 active:bg-gray-500 focus:outline-none cursor-pointer ease-in duration-150">
            <button className="text-white flex gap-2 " type="#">
              Google
            </button>
          </div>
          <div className="button w-3/5 mt-4 border-2 border-transparent rounded-lg bg-black h-10 flex items-center justify-center hover:bg-gray-600 active:bg-gray-500 focus:outline-none cursor-pointer ease-in duration-150">
            <button className="text-white flex gap-2 " type="#">
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FormLogin, FormRegister };
