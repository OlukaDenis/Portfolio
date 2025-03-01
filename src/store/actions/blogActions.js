import appConstants from '../constants';

const {
  BLOG_ERROR, BLOG_REQUEST, BLOG_SUCCESS, APP_LOADING,
} = appConstants;

const requestBlogs = (blogs) => ({ type: BLOG_REQUEST, blogs });

const blogSuccess = (message) => ({ type: BLOG_SUCCESS, message });

const blogError = (message) => ({ type: BLOG_ERROR, message });

const blogLoading = () => ({ type: APP_LOADING });

export {
  requestBlogs,
  blogError,
  blogSuccess,
  blogLoading,
};
