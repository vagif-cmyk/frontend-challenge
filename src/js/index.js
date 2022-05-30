const URL = 'https://api.thecatapi.com/v1/images/search/?limit=15&mime_types=jpg,png';
const keyApi = '77955f2b-7c52-41e5-bb4f-7505a95c188b';

// getCats()
// .then(data => setPreloader(<div>{data.map(cat => <img className='cat' src={cat.url} />)}</div>));

// getCats()
//   .then(data => {
//     console.log(data);
//     setPreloader(null);
//     setCats()
//   }); 
  async function getData(url = URL) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': keyApi,
      }
    }
    );
    const data = await response.json();
    return data;
  }

export default getData;

