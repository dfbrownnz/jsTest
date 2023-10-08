import React, { useState, useEffect } from 'react';

function TableBeingFilter() {
  
  const TheData = 
  [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Peter Smith" },
  ]
  const [data, setData] = useState(TheData);

  const FunctionFilter = (evt) => {
    // const filteredData = data.filter(d => d.name.toLowerCase().includes(filter.toLowerCase()));
    const filteredData = data.filter(d => d.name.toLowerCase().includes(evt.target.value.toLowerCase() ));
    setData(filteredData);
  };


  const resetTable = () => {
    setData(TheData);
  };

  return (
    <div>
      <h5>TableBeingFilterApp</h5>
      <input type="text" placeholder="Filter" name="filter"  onChange={evt => FunctionFilter(evt)} />
      <button onClick={resetTable}>Reset Table</button>

      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map(d => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBeingFilter;
