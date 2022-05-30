import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/app.scss';

const App = () => {
  const URL = 'https://api.thecatapi.com/v1/images/search/?limit=15&mime_types=jpg,png';
  const keyApi = '77955f2b-7c52-41e5-bb4f-7505a95c188b';

  const [cats, setCats] = useState(null);

  async function fetchData() {
    const response = await axios.get(URL, {
      method: 'GET',
      headers: {
        'x-api-key': keyApi,
      }
    });
    setCats(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container'>
      {cats !== null ? cats.map((cat) => <img className='cat' src={cat.url} />) : 'Loading...'}
    </div>
  );
};

export default App;