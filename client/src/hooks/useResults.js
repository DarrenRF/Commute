import { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
        params: {
          keyword: searchTerm,
          location: '33.8902674,-118.1780467',
          radius: '50000',
          key: 'AIzaSyBO6zeK8z3oflQsSD_Nds6GZs2Iz_A3t5o',
        }
      });
      setResults(response.data.results);
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  }

  return [searchApi, results, errorMessage];
};
