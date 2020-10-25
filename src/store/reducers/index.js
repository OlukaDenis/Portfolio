import { combineReducers } from 'redux';
import projectReducer from './projectReducer';

const reducer = combineReducers({
  projects: projectReducer,
});

export default reducer;