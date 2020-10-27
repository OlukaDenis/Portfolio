import appConstants from '../constants';

const {
  SKILL_ERROR, SKILL_REQUEST, SKILL_SUCCESS, APP_LOADING,
} = appConstants;

const requestSkills = skills => ({ type: SKILL_REQUEST, skills });

const skillSuccess = message => ({ type: SKILL_SUCCESS, message });

const skillError = message => ({ type: SKILL_ERROR, message });

const skillLoading = () => ({ type: APP_LOADING });

export {
  requestSkills,
  skillError,
  skillLoading,
  skillSuccess,
};
