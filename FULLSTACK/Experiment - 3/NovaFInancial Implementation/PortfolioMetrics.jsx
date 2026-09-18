function PortfolioMetrics({
  totalValue,
  currency,
  assetCount
}) {
  return (
    <div>

      <h2>
        Total: {currency} {totalValue.toFixed(2)}
      </h2>

      <p>Assets: {assetCount}</p>

    </div>
  );
}

export default PortfolioMetrics;
