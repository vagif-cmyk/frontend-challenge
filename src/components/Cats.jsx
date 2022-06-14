import React, { useState, useEffect } from 'react';
import Image from './Image.jsx';
import axios from 'axios';
import Header from './Header.jsx';
import Spinner from './Spinner.jsx';

const Cats = () => {


  const URL = 'https://api.thecatapi.com/v1/images/search/?limit=15&mime_types=jpg,png';
  const keyApi = '77955f2b-7c52-41e5-bb4f-7505a95c188b';
  let allCats = [];
  const [cats, setCats] = useState(null);

  function showFavoriteCats() {
    const favorites = JSON.parse(localStorage.getItem('cat'));
    setCats(favorites);
  }

  function showAllCats() {
    const all = JSON.parse(localStorage.getItem('allCats'));
    setCats(all);
  }

  async function fetchData() {
    const response = await axios.get(URL, {
      method: 'GET',
      headers: {
        'x-api-key': keyApi,
      }
    });
    localStorage.setItem('allCats', JSON.stringify(response.data));
    setCats(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header
        showFavoriteCats={showFavoriteCats} showAllCats={showAllCats} className='header'
      />
      <div className='container'>
        {cats !== null
          ? cats.map((cat) => <Image src={cat.url || cat} alt='cat' key={Math.random()} />)
          : <Spinner />}
      </div>
    </div>
  );
};


export default Cats;