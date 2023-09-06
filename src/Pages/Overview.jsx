import StockPortfolio from "../Features/StockPortfolio";
import LiveChart from "../Features/LiveChart";
import MostActive from "../Features/MostActive";

function Overview() {
  return (
    <div>
      <StockPortfolio />
      <LiveChart />
      <MostActive />
    </div>
  );
}

export default Overview;
