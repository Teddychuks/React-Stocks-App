import { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const [open, setOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Overview");

  return (
    <div className="flex">
      <div>
        <SideBar
          open={open}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>

      <div className="flex-grow bg-slate-200 ">
        <Header open={open} setOpen={setOpen} selectedPage={selectedPage} />
        <main className="p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
