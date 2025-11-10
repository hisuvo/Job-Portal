import React from "react";
import Navbar from "../components/menu/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
