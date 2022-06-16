import React, { useState, useEffect } from 'react';
import Image from './Image.jsx';
import axios from 'axios';
import Header from './Header.jsx';
import Spinner from './Spinner.jsx';
import Warning from './Warning.jsx';

const Cats = () => {

  const URL = 'https://api.thecatapi.com/v1/images/search/?limit=15&mime_types=jpg,png';
  const keyApi = '77955f2b-7c52-41e5-bb4f-7505a95c188b';
  const [cats, setCats] = useState(null);
  const [cl, setCl] = useState('warning op-0');

  function showFavoriteCats() {
    const favorites = JSON.parse(localStorage.getItem('cats'));
    if (favorites === null) {
      setCl('warning');
      setTimeout(() => {
        setCl('warning op-0');
      }, 2000);
    } else {
      setCats(favorites);
    }
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
      <Warning text='У вас еще нет любимых котов...' className={cl} />
      <div className='container'>
        {cats !== null
          ? cats.map((cat) => <Image src={cat.url || cat} alt='cat' key={Math.random()} />)
          : <Spinner />}
      </div>
    </div>
  );
};


export default Cats;