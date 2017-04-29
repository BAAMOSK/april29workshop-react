import { FETCH_PEOPLE, FETCH_PEOPLE_ERROR, FETCH_PEOPLE_SUCCESS } from '../actions/peoples';

const initialState = {
  loading: false,
  data: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        loading: true,
      }
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      }
    case FETCH_PEOPLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.e
      }
    default:
      return state;
  }
};