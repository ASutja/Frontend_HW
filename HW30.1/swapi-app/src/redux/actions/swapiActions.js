import axios from 'axios';

export const FETCH_SWAPI_SUCCESS = 'FETCH_SWAPI_SUCCESS';

export const fetchSwapiData = () => async (dispatch) => {
  try {
    const response = await axios.get('https://swapi.dev/api/people');
    dispatch({ type: FETCH_SWAPI_SUCCESS, payload: response.data.results });
  } catch (error) {
    console.error('Error fetching data from Swapi:', error);
  }
};
