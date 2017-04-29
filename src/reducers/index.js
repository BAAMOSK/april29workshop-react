import { combineReducers } from 'redux';

import todos from './todos';
import peoples from './peoples';

export default combineReducers({
  todos,
  peoples
});