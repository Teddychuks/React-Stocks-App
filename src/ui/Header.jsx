import { NavLink } from "react-router-dom";

function Header() {
  const Menus = [
    { title: "Overview" },
    { title: "News" },
    { title: "Indices" },
  ];

  return (
    <div>
      <div className=" w-full left-0">
        <header className="fixed flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-4 bg-gray-800 ">
          <nav
            className=" w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
            aria-label="Global"
          >
            <div className="ml-4 inline-flex gap-2">
              <img
                src="stockslogo.png"
                alt="stocklogo"
                className={` w-10 h-10 ${!open && ""}`}
              />
              <h1
                className={`flex-none text-xl font-semibold text-neutral-50 ${
                  !open && "hidden"
                }`}
              >
                React stocks App
              </h1>
            </div>

            <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
              {Menus.map((menu, index) => (
                <NavLink
                  key={index}
                  to={menu.title.toLowerCase().replace(/ & /g, "")}
                  className={({ isActive }) =>
                    `font-medium text-blue-500 ${
                      isActive ? "text-neutral-50" : ""
                    }`
                  }
                >
                  {menu.title}
                </NavLink>
              ))}
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
