import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <h2 className="text-4xl font-semibold">This is Register page</h2>
      <div className="max-w-lg mx-auto w-full p-4 border">
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, velit
          doloremque fuga itaque quia eligendi temporibus sint fugit cum rem
          quae et dolor, ducimus sequi consequatur placeat. Doloremque libero ab
          corrupti ipsam mollitia laborum ullam, nemo reprehenderit molestias
          quia accusantium?
        </p>
      </div>
      <Link to={"/auth/login"}>Login-</Link>
    </div>
  );
};

export default Register;
