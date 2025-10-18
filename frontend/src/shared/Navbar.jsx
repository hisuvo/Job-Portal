import { IoPersonAddOutline } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";
import Button from "./Button";
import NavbarLogo from "../assets/logo.png";
import { NavLink } from "react-router";
import useToggle from "../hook/useToggle";

const Navbar = () => {
  const { isOn, open, close } = useToggle();
  return (
    <div className="relative flex justify-between items-center px-4 py-8 border">
      <button className="sm:hidden focus:outline-none" onClick={open}>
        {/* Hamburger Icon */}
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-blue-500"></span>
          <span className="block w-6 h-0.5 bg-blue-500"></span>
          <span className="block w-6 h-0.5 bg-blue-500"></span>
        </div>
      </button>
      {/* ---- Navber Image ---- */}
      <div>
        <img
          src={NavbarLogo}
          alt="LogoImage"
          className="max-w-28 sm:max-w-36 object-contain"
        />
      </div>

      {/* ---- Navber menu ---- */}
      <div className="hidden sm:flex">
        <ul className="flex gap-2 font-semibold">
          <li>
            <NavLink className={" p-3"} to={"/"}>
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink className={" p-3"} to={"/candidate"}>
              CANDIDATE
            </NavLink>
          </li>
          <li>
            <NavLink className={" p-3"} to={"/employers"}>
              EMPLOYERS
            </NavLink>
          </li>
          <li>
            <NavLink className={" p-3"} to={"/jobs"}>
              JOBS
            </NavLink>
          </li>
          <li>
            <NavLink className={" p-3"} to={"/blog"}>
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink className={"p-3"} to={"/contact"}>
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink className={" p-3"} to={"/price"}>
              PRICE
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashbord/candidate"}>Candidate</NavLink>
          </li>
          <li>
            <NavLink to={"/dashbord/employer"}>Employer</NavLink>
          </li>
        </ul>
      </div>

      {/* ---- Mobile menu ---- */}
      {isOn && (
        <div className="sm:hidden absolute top-0 left-0 bg-blue-200 max-w-sm w-full">
          <ul className=" font-semibold p-4 space-y-6">
            <li onClick={close}>
              <button className="btn btn-error">close</button>
            </li>
            <li onClick={close}>
              <NavLink className={" p-3"} to={"/"}>
                HOME
              </NavLink>
            </li>

            <li onClick={close}>
              <NavLink className={" p-3"} to={"/candidate"}>
                CANDIDATE
              </NavLink>
            </li>
            <li onClick={close}>
              <NavLink className={" p-3"} to={"/employers"}>
                EMPLOYERS
              </NavLink>
            </li>
            <li onClick={close}>
              <NavLink className={" p-3"} to={"/jobs"}>
                JOBS
              </NavLink>
            </li>
            <li onClick={close}>
              <NavLink className={" p-3"} to={"/blog"}>
                BLOG
              </NavLink>
            </li>
            <li onClick={close}>
              <NavLink className={"p-3"} to={"/contact"}>
                CONTACT
              </NavLink>
            </li>
            <li onClick={close}>
              <NavLink className={" p-3"} to={"/price"}>
                PRICE
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashbord/candidate"}>Candidate</NavLink>
            </li>
            <li>
              <NavLink to={"/dashbord/employer"}>Employer</NavLink>
            </li>
          </ul>
        </div>
      )}

      {/* ---- Navbar Right Side Button ---- */}
      <div>
        {/* <button className="btn">
          <IoPersonAddOutline />
          LOGIN
        </button> */}

        <Button>
          <FaBriefcase />
          REGISTER
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
