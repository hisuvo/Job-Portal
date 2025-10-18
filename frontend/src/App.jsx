import React from "react";
import Navbar from "./shared/Navbar";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
