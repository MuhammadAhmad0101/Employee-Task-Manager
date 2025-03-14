/* eslint-disable react/prop-types */
import { useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import { getFromStorage } from "../../utils/StorageAccess";

const EmployeeHeader = ({ id }) => {
      const { pathname } = useLocation();
      const navigate = useNavigate();
      let Username = null;
      if (pathname.includes("employee")) Username = getFromStorage("employee").find((eachEmployee) => eachEmployee.id === id);
      if (pathname.includes("admin")) Username = getFromStorage("admin");
      return (
            <div className="w-full flex items-center justify-between px-6 h-[10vh]">
                  <h1 className="text-2xl md:text-3xl text-white tracking-tighter font-semibold">
                        Hello <span> {Username.username}🤗 </span>
                  </h1>
                  <div
                        onClick={() => {
                              localStorage.removeItem("loggedInUser");
                              navigate("/");
                        }}
                  >
                        <Button bgColor="bg-red-200" textColor="text-red-600" message={"Logout"} />
                  </div>
            </div>
      );
};
export default EmployeeHeader;
