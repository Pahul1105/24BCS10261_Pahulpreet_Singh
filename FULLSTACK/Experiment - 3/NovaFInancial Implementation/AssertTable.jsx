function AssetTable({ assets, currency }) {
  return (
    <div>

      {assets.map((asset) => (
        <div key={asset.id}>

          <h3>{asset.name}</h3>

          <p>Symbol: {asset.symbol}</p>

          <p>Category: {asset.assetClass}</p>

          <p>
            Value: {currency}{" "}
            {(asset.quantity * asset.currentPrice).toFixed(2)}
          </p>

        </div>
      ))}

    </div>
  );
}

export default AssetTable;
