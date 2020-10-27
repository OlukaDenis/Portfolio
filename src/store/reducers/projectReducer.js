import appConstants from '../constants';
import initialState from '../initialState';

const {
  PROJECT_ERROR, PROJECT_REQUEST, PROJECT_SUCCESS, APP_LOADING,
} = appConstants;

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_REQUEST:
      return {
        ...state,
        projects: action.projects,
        loading: false,
      };

    case PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case APP_LOADING:
      return {
        ...state,
        loading: true,
      };

    case PROJECT_ERROR:
      return {
        ...state,
        error: action.message,
      };

    default:
      return state;
  }
};

export default projectReducer;
