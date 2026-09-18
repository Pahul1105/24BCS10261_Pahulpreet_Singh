import { useEffect, useMemo, useState } from "react";
import FilterBar from "./FilterBar";
import PortfolioMetrics from "./PortfolioMetrics";
import AssetTable from "./AssetTable";

const MOCK_ASSETS = [
  {
    id: 1,
    name: "Apple Inc.",
    symbol: "AAPL",
    assetClass: "Stocks",
    quantity: 10,
    currentPrice: 195.5,
  },
  {
    id: 2,
    name: "Microsoft Corp.",
    symbol: "MSFT",
    assetClass: "Stocks",
    quantity: 8,
    currentPrice: 420.25,
  },
  {
    id: 3,
    name: "Bitcoin",
    symbol: "BTC",
    assetClass: "Crypto",
    quantity: 0.5,
    currentPrice: 65000,
  },
  {
    id: 4,
    name: "Ethereum",
    symbol: "ETH",
    assetClass: "Crypto",
    quantity: 2,
    currentPrice: 3500,
  },
  {
    id: 5,
    name: "US Treasury Bond",
    symbol: "UST",
    assetClass: "Bonds",
    quantity: 20,
    currentPrice: 102.5,
  },
  {
    id: 6,
    name: "Gold ETF",
    symbol: "GLD",
    assetClass: "Commodities",
    quantity: 15,
    currentPrice: 220.75,
  },
];

function App() {

  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currency, setCurrency] = useState("USD");
  useEffect(() => {
    const timer = setTimeout(() => {
      setAssets(MOCK_ASSETS);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const { filteredAssets, totalValue } = useMemo(() => {
    window.analyticsMemoCount =
      (window.analyticsMemoCount || 0) + 1;
    const filteredAssets = assets.filter((asset) => {
      const nameMatch = asset.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const categoryMatch =
        selectedCategory === "All" ||
        asset.assetClass === selectedCategory;
      return nameMatch && categoryMatch;
    });
    const totalValue = filteredAssets.reduce(
      (total, asset) =>
        total + asset.quantity * asset.currentPrice,
      0
    );


    return {
      filteredAssets,
      totalValue,
    };

  }, [assets, searchTerm, selectedCategory]);
  useEffect(() => {
    const formattedTotal =
      totalValue.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    document.title = `Portfolio - Total: $${formattedTotal}`;
  }, [totalValue]);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h1>Investment Analytics Dashboard</h1>

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        currency={currency}
        setCurrency={setCurrency}
      />


      <PortfolioMetrics
        totalValue={totalValue}
        currency={currency}
        assetCount={filteredAssets.length}
      />


      <AssetTable
        assets={filteredAssets}
        currency={currency}
      />

    </div>
  );
}

export default App;
