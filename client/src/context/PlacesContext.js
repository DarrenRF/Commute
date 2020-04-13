import axios from 'axios';
import polyline from '@mapbox/polyline'
import createDataContext from './createDataContext';

const placesReducer = (state, action) => {
  switch (action.type) {
    case 'search_api':
      return { ...state, searchResults: action.payload };
    case 'directions_api':
      return { ...state, directionsResults: action.payload };
    default:
      return state;
  }
}

const directionsApi =  dispatch => async (pickupLocation, destinationLocation) => {
  const start = `${pickupLocation.latitude},${pickupLocation.longitude}`
  const end = `${destinationLocation.latitude},${destinationLocation.longitude}`
  const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=AIzaSyB6MsesRHXe2ruJenJ3c0OTJ3vqDda9s24`);

  let points = polyline.decode(response.data.routes[0].overview_polyline.points);
  let coords = points.map(point => ({ latitude: point[0], longitude: point[1] }))

  dispatch({ type: 'directions_api', payload: coords });
}

const searchApi =  dispatch => async (searchTerm, { latitude, longitude }) => {

  const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
    params: {
      keyword: searchTerm,
      location: `${latitude},${longitude}`,
      radius: '50000',
      key: 'AIzaSyBO6zeK8z3oflQsSD_Nds6GZs2Iz_A3t5o',
    }
  });

  dispatch({ type: 'search_api', payload: response.data.results });
}

export const { Provider, Context } = createDataContext(
  placesReducer,
  { searchApi, directionsApi },
  { searchResults: [], directionsResults: [] }
);
