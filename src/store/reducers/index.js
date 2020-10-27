import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import skillReducer from './skillReducer';
import blogReducer from './blogReducer';

const reducer = combineReducers({
  projectReducer,
  skillReducer,
  blogReducer,
});

export default reducer;
