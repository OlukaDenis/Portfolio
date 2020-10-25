import { appConstants } from '../constants';
import { initialState } from '../initialState';
const { SKILL_ERROR, APP_LOADING, SKILL_REQUEST, SKILL_SUCCESS } = appConstants;

const skillReducer = (state = initialState, action) => {
  switch(action.type) {
    case SKILL_REQUEST:
      return {
        ...state,
        skills: action.skills,
        loading: false,
      };

    case SKILL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    
    case APP_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SKILL_ERROR:
      return {
        ...state,
        error: action.message,
      };
  }
}

export default skillReducer;