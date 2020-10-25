import { appConstants } from '../constants';

const { PROJECT_REQUEST, PROJECT_SUCCESS, PROJECT_ERROR, APP_LOADING } = appConstants;

const requestProjects = projects => ({ type: PROJECT_REQUEST, projects })

const projectSuccess = message => ({ type: PROJECT_SUCCESS, message })

const projectError = message => ({ type: PROJECT_ERROR, message })

const projectLoading = () => ({ type: APP_LOADING })

export {
  requestProjects,
  projectError,
  projectLoading,
  projectSuccess,
};
