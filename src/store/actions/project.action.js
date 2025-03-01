import { apiAxios } from '../../utils/axiosConfig';
import appConstants from '../constants';

const {
  PROJECT_REQUEST, PROJECT_SUCCESS, PROJECT_ERROR, APP_LOADING,
} = appConstants;

const fetchProjects = () => async (dispatch) => {
  console.log('Fetching projects');
  dispatch({ type: APP_LOADING, value: true });
  try {
    const result = await apiAxios.get('/projects');
    console.log(result);
    dispatch({ type: APP_LOADING, value: false });
    dispatch({ type: PROJECT_REQUEST, projects: result.data.data });
    dispatch({ type: PROJECT_SUCCESS, projects: result.data.data });
  } catch (err) {
    dispatch({ type: APP_LOADING, value: false });
    dispatch({ type: PROJECT_ERROR, error: err.message });
    console.log('Error: ', err.message);
  }
};

export default fetchProjects;
