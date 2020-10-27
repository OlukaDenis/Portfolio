import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import skillReducer from './skillReducer';
import blogReducer from './blogReducer';
import drawerReducer from './drawerReducer';

const reducer = combineReducers({
  projectReducer,
  skillReducer,
  blogReducer,
  drawerReducer,
});

export default reducer;
