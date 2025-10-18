import React from "react";

import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

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
