import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <h2 className="text-2xl font-semibold">Welcome, Create New Account</h2>
      <div className="max-w-lg mx-auto w-full">
        {/* Registation form */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-lg border p-4 md:p-8">
          <label className="label">Name</label>
          <input type="text" className="input w-full" placeholder="Name" />

          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />

          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </div>
      <Link to={"/auth/login"}>Login-</Link>
    </div>
  );
};

export default Register;
