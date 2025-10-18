import { FaBriefcase } from "react-icons/fa6";
import useToggle from "../hook/useToggle";
import NavbarLogo from "../assets/logo.png";
import Button from "../shared/Button";
import { Link, NavLink } from "react-router";
import { IoPersonAddOutline } from "react-icons/io5";
import MobileMenu from "./menu/MobileMenu";
import DesktopMenu from "./menu/DesktopMenu";

const Navbar = () => {
  const { isOn, open, close } = useToggle();

  return (
    <div className="relative flex justify-between items-center px-4 py-8 border">
      {/* humberger manu */}
      <button className="lg:hidden focus:outline-none btn" onClick={open}>
        {/* Hamburger Icon */}
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-blue-500"></span>
          <span className="block w-6 h-0.5 bg-blue-500"></span>
          <span className="block w-6 h-0.5 bg-blue-500"></span>
        </div>
      </button>

      {/* ---- Navber Image ---- */}
      <div>
        <Link to={"/"}>
          <img
            src={NavbarLogo}
            alt="LogoImage"
            className="max-w-28 sm:max-w-36 object-contain"
          />
        </Link>
      </div>

      {/* ---- Navber menu ---- */}
      <DesktopMenu />

      {/* ---- Mobile menu ---- */}
      <MobileMenu isOn={isOn} close={close} />

      {/* ---- Navbar Right Side Button ---- */}
      <div className="space-x-2">
        <NavLink to={"/auth/login"}>
          <button className="btn">
            <IoPersonAddOutline />
            LOGIN
          </button>
        </NavLink>

        <NavLink to={"/auth/register"}>
          <Button>
            <FaBriefcase />
            REGISTER
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
