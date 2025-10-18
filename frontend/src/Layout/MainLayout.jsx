import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto px-2">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
