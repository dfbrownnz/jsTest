import React, { useState } from 'react';

//function ChatGptFilterJsonApp({ jsonFileName }) {
function ChatGptFilterJsonApp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  //const jsonFileUrl = process.env.PUBLIC_URL + '/' + jsonFileName;
  const jsonFileUrl = 'ChatGptFilterjson.json';

  // const handleSearch = () => {
  //   fetch(jsonFileUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const results = data.filter((record) =>
  //         JSON.stringify(record).includes(searchTerm)
  //       );
  //       setSearchResults(results);
  //     })
  //     .catch((error) => console.error('Error fetching JSON:', error));
  // };

  return (
    <div>
      <h1>JSON Search</h1>
      in App.js put this line...
      {/* <div className="App">       <JsonSearch jsonFileName="data.json" />     </div> */}

      {/* <input         type="text"         placeholder="Search JSON"         value={searchTerm}         onChange={(e) => setSearchTerm(e.target.value)}      /> */}
      {/* <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{JSON.stringify(result)}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default ChatGptFilterJsonApp;
