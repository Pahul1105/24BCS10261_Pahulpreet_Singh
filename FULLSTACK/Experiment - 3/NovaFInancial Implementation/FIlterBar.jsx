function FilterBar({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  currency,
  setCurrency
}) {
  return (
    <div>

      <input
        type="text"
        placeholder="Search asset"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Stocks">Stocks</option>
        <option value="Crypto">Crypto</option>
        <option value="Bonds">Bonds</option>
        <option value="Commodities">Commodities</option>
      </select>

      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
      </select>

    </div>
  );
}

export default FilterBar;
