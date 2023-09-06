import { HiMiniSquares2X2, HiOutlinePhoneArrowDownLeft } from "react-icons/hi2";
import {
  FaBagShopping,
  FaChartSimple,
  FaPeopleGroup,
  FaWallet,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function SideBar({ open, setSelectedPage }) {
  const Menus = [
    { title: "Overview", icon: HiMiniSquares2X2 },
    { title: "News", icon: FaChartSimple },
    { title: "Indices", icon: FaWallet },
    { title: "Market", icon: FaBagShopping },
    { title: "Community", icon: FaPeopleGroup, spacing: true },
    { title: "Help & Support", icon: HiOutlinePhoneArrowDownLeft },
  ];

  const handleSideBarItemClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="flex">
      <div
        className={`transition-all duration-300 h-screen  border-r border-gray-200 pt-4 pb-10 lg:block lg:translate-x-0 lg:right-auto lg:bottom-0  bg-slate-50 ${
          open ? "w-64" : "w-20"
        }`}
      >
        <div className="ml-4 inline-flex gap-2">
          <img
            src="stockslogo.png"
            alt="stocklogo"
            className={` w-10 h-10 ${!open && ""}`}
          />
          <h1
            className={`flex-none text-xl font-semibold text-neutral-900 ${
              !open && "hidden"
            }`}
          >
            React stocks
          </h1>
        </div>
        <nav className="px-6  w-full flex flex-col flex-wrap">
          <ul>
            {Menus.map((menu, index) => (
              <NavLink
                key={index}
                to={menu.title.toLowerCase().replace(/ & /g, "")}
                className={({ isActive }) =>
                  `text-sm flex justify-center items-center gap-x-3.5 cursor-pointer py-4 rounded-md text-${
                    isActive
                      ? "neutral-50 bg-neutral-800 text-neutral-50"
                      : "slate-600 hover:bg-neutral-800 hover:text-neutral-50"
                  } origin-left font-medium ${menu.spacing ? "mt-7" : "mt-2"} ${
                    !open ? "mr-2" : ""
                  }`
                }
                onClick={() => handleSideBarItemClick(menu.title)}
              >
                <span className={`text-xl block float-left`}>
                  <menu.icon />
                </span>
                <span
                  className={`text-sm font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
