import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

const MobileMenu = ({ isOn, close }) => {
  return (
    <AnimatePresence>
      {isOn && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:hidden overflow-auto fixed top-0 left-0 bg-blue-200 max-w-[300px] w-full h-full z-50 shadow-lg"
        >
          <ul className=" font-semibold p-4 space-y-1">
            <li onClick={close} className="text-right">
              <button className="btn btn-square bg-[#0088FE] hover:bg-red-400 text-white">
                <RxCross2 />
              </button>
            </li>

            <li
              className="hover:bg-[#0088FE] hover:text-[#fff] cursor-pointer"
              onClick={close}
            >
              <NavLink className={"inline-block p-2"} to={"/"}>
                HOME
              </NavLink>
            </li>

            <li
              className="hover:bg-[#0088FE] hover:text-[#fff] cursor-pointer"
              onClick={close}
            >
              <NavLink className={"inline-block p-2"} to={"/candidate"}>
                CANDIDATE
              </NavLink>
            </li>
            <li
              className="hover:bg-[#0088FE] hover:text-[#fff] cursor-pointer"
              onClick={close}
            >
              <NavLink className={"inline-block p-2"} to={"/employers"}>
                EMPLOYERS
              </NavLink>
            </li>
            <li
              className="hover:bg-[#0088FE] hover:text-[#fff] cursor-pointer"
              onClick={close}
            >
              <NavLink className={"inline-block p-2"} to={"/jobs"}>
                JOBS
              </NavLink>
            </li>
            <li
              className="hover:bg-[#0088FE] hover:text-[#fff] cursor-pointer"
              onClick={close}
            >
              <NavLink className={"inline-block p-2"} to={"/blog"}>
                BLOG
              </NavLink>
            </li>
            <li
              className="hover:bg-[#0088FE] hover:text-[#fff] cursor-pointer"
              onClick={close}
            >
              <NavLink className={"inline-block p-2"} to={"/contact"}>
                CONTACT
              </NavLink>
            </li>
            <li
              className="hover:bg-[#0088FE] hover:text-[#fff] cursor-pointer"
              onClick={close}
            >
              <NavLink className={"inline-block p-2"} to={"/price"}>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
