import { useEffect , useState } from 'react';
import yelp from '../API/Yelp';
import CitySearch from '../Screens/CitySearch';

export default ({ route }) => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    //console.log('Hi there!');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: {route.params.paramKey} ,
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('pasta');
  //useEffect(() => {
   // searchApi('pasta');
  //}, []);

  return [searchApi, results, errorMessage];
};
