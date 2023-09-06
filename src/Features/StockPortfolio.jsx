import PortFolio1 from "../Components/OverViewPage/PortFolio1";
import PortFolio2 from "../Components/OverViewPage/PortFolio2";
import PortFolio3 from "../Components/OverViewPage/PortFolio3";
import PortFolio4 from "../Components/OverViewPage/PortFolio4";

function StockPortfolio() {
  return (
    <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-5 mx-auto bg-slate-50">
      <h3 className="px-4 font-semibold">Stock Portfolio</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
        <PortFolio1 />
        <PortFolio2 />
        <PortFolio3 />
        <PortFolio4 />
      </div>
    </div>
  );
}

export default StockPortfolio;
