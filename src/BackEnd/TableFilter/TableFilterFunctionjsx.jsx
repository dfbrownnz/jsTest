import React, { useState } from "react";

const FilterTableFunction = () => {
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <form onSubmit={handleFilter}>
      <input type="text" name="filter"  />
      <button type="submit">Filter</button>
    </form>
  );
};

export default FilterTableFunction;
