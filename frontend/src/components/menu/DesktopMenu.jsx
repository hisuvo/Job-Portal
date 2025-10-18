import React from "react";
import { NavLink } from "react-router";

const DesktopMenu = () => {
  return (
    <div className="hidden lg:flex">
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

        {/* <li>
            <NavLink to={"/dashbord/candidate"}>Candidate</NavLink>
          </li>
          <li>
            <NavLink to={"/dashbord/employer"}>Employer</NavLink>
          </li> */}
      </ul>
    </div>
  );
};

export default DesktopMenu;
