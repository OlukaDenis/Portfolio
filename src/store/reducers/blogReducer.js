import { appConstants } from '../constants';
import { initialState } from '../initialState';
const { APP_LOADING, BLOG_ERROR, BLOG_REQUEST, BLOG_SUCCESS } = appConstants;

const blogReducer = (state = initialState, action) => {
  switch(action.type) {
    case BLOG_REQUEST:
      return {
        ...state,
        blogs: action.blogs,
        loading: false,
      };

    case BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    
    case APP_LOADING:
      return {
        ...state,
        loading: true,
      };

    case BLOG_ERROR:
      return {
        ...state,
        error: action.message,
      };
  }
}

export default blogReducer;