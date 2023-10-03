import React, { useState } from 'react';

function ChatGptCallApi() {
  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState('');
  const [response, setResponse] = useState('');

  const apiUrl = 'https://example.com/api'; // Replace with your API endpoint

  const handleButtonClick = () => {
    // Create an object with your parameters
    const data = {
      param1: param1,
      param2: param2,
    };

    // Send a POST request to the API with the parameters
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response
        setResponse(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch.
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Parameter 1"
        value={param1}
        onChange={(e) => setParam1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Parameter 2"
        value={param2}
        onChange={(e) => setParam2(e.target.value)}
      />
      <button onClick={handleButtonClick}>Send Parameters</button>
      <div>
        <p>API Response:</p>
        <pre>{JSON.stringify(response, null, 2)}</pre>
      </div>
    </div>
  );
}

export default ChatGptCallApi;
