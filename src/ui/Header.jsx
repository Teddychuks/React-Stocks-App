import {
  HiBellAlert,
  HiEnvelopeOpen,
  HiMiniGlobeEuropeAfrica,
} from "react-icons/hi2";
import SearchStocks from "./SearchStocks";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";

function Header({ open, setOpen, selectedPage }) {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-slate-50 py-3 px-3">
      <span
        className="font-bold text-lg text-neutral-900 tracking-wide inline-flex gap-2 w-52 "
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <RiMenuUnfoldFill className="w-7 h-7" />
        ) : (
          <RiMenuFoldFill className="w-7 h-7" />
        )}
        {selectedPage}
      </span>

      <SearchStocks className="" />

      <div className="flex items-center">
        <div className="hidden sm:inline-flex mr-8  gap-x-6">
          <HiMiniGlobeEuropeAfrica className="flex  hover:bg-blue-500 hover:text-neutral-50 rounded-full w-6 h-6" />
          <HiEnvelopeOpen className="flex hover:bg-blue-500 hover:text-neutral-50 rounded-full w-6 h-6" />
          <HiBellAlert className="flex hover:bg-blue-500 hover:text-neutral-50 rounded-full w-6 h-6" />
        </div>

        <div className="inline-flex items-center gap-x-2">
          <img
            src="profilelogo.png"
            alt="profile"
            className="w-8 h-8 rounded-full "
          />
          <p className="font-medium text-neutral-900">Teddychuks</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
