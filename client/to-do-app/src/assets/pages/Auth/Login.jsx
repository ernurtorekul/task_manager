import React from "react";
import { FormLogin, FormRegister } from "../../components/Form";
import LoginImage from "../../img/login.png"

function Login() {
  return (
    <div className="flex h-screen ">
      <div className="w-3/5 h-screen flex flex-col bg-gray-300 p-8">
        <div className="mb-4 ">
          <p className="text-xl font-bold">Task Manager</p>
        </div>
        <div className="flex flex-col h-full w-full rounded bg-gray-400 items-center">
          <div className="flex items-center flex-col">
            <h1 className="mt-8 text-3xl font-bold">
              Organize your tasks with ease.
            </h1>
            <h2 className="mt-4 text-lg">
              Navigate with ease with the docked bar.
            </h2>
          </div>
          <div className="w-4/5 h-3/5 mt-auto"><img src={LoginImage} alt="" /></div>
          <div className="m-auto">
            <h3 className="text-md">Access your tasks from anywhere</h3>
          </div>
        </div>
      </div>
      <div className="w-2/5 h-full justify-center flex-col flex">
        <FormLogin></FormLogin>
      </div>
    </div>
  );
}
export default Login;
