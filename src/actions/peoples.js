import axios from 'axios';

export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';
export const FETCH_PEOPLE_ERROR = 'FETCH_PEOPLE_ERROR';

export function fetchPeople() {
  return async (dispatch) => {
    dispatch({ type: FETCH_PEOPLE });
    try {
      const { data } = await axios.get('http://swapi.co/api/people/1');

      return dispatch({ type: FETCH_PEOPLE_SUCCESS, data });
    } catch (e) {
      return dispatch({ type: FETCH_PEOPLE_ERROR, e: e.message });
    }
  }
}

