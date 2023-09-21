import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const [open, setOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Overview");

  return (
    <div className="flex">
      <div className="flex-grow bg-slate-200 ">
        <Header
          open={open}
          setOpen={setOpen}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <main className="p-5 py-24 bg-slate-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
